import { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import { styled } from "@mui/system";

const InnerCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgb(144, 89, 0)",
  color: "#000000",
  display: "flex",
  margin: "20px 10px",
  alignItems: "center",
}));

const StyledCardContent = styled(CardContent)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  overflowX: "scroll",
});

const LeftContent = styled(Box)({
  flexGrow: 1,
});

const ShortUrlCard = ({ shortUrl, originalUrl, onDelete }: any) => {
  const [showOriginal, setShowOriginal] = useState(false);

  const handleToggleDisplay = () => {
    setShowOriginal(!showOriginal);
  };

  const handleDelete = () => {
    onDelete();
  };

  const handleOnClickRedirect = () => {
    window.location.href = originalUrl;
  };

  return (
    <InnerCard>
      <StyledCardContent>
        <LeftContent onClick={handleOnClickRedirect}>
          <Link>
          <Typography
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            color={"white"}
            variant="h6"
            gutterBottom
          >
            {shortUrl}
          </Typography>
          </Link>
          {showOriginal && (
            <Link>
            <Typography sx={{
              "&:hover" : {
                cursor: "pointer",
              }
            }} color={"white"} variant="h6" gutterBottom>
              {originalUrl}
            </Typography>
            </Link>
          )}
        </LeftContent>
        <CardActions>
          <IconButton onClick={handleToggleDisplay} color="inherit">
            {!showOriginal ? (
              <ToggleOffOutlinedIcon />
            ) : (
              <ToggleOnOutlinedIcon />
            )}
          </IconButton>
          <IconButton onClick={handleDelete} color="inherit">
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </CardActions>
      </StyledCardContent>
    </InnerCard>
  );
};

export default ShortUrlCard;
