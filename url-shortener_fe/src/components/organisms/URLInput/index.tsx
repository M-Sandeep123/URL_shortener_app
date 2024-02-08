import  { useState } from 'react';
import { TextField, Card } from '@mui/material';
import { styled } from '@mui/system';
import ShortUrlCard from '../ShortURLList';
import CustomButton from '../../atoms/Button';
import { postURLApi } from '../../../utils';

const StyledShortUrlDisplay = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%', 
  margin: '1rem'
});

const OuterCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'lightgray', 
  color: '#ffffff', 
  padding: '1rem',
  width : "500px"
}));

const InputContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
  marginLeft: "10px",
  marginRight: "10px"
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginRight: '1rem',
  width: '300px',
  flexGrow: 1,
}));

const StyledButton = styled(CustomButton)({
  backgroundColor: '#4caf50', 
  color: '#ffffff',
});

const ShortUrlDisplay = ({shortenURLs}:any) => {
  const [inputUrl, setInputUrl] = useState('');
  const handleShorten = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await postURLApi(inputUrl, token).then(res=> res);
        setInputUrl("");
      } else {
          console.error("Token not found in local storage.");
      }
  } catch (error) {
      console.error("Error posting URLs:", error);
  }
  };
  

  const handleInputChange = (event:any) => {
    setInputUrl(event.target.value);
  };

  return (
    <StyledShortUrlDisplay>
      <OuterCard>
        <InputContainer>
          <StyledTextField 
            label="Enter URL" 
            variant="outlined" 
            value={inputUrl} 
            onChange={handleInputChange} 
            placeholder="Enter URL" 
          />
          <StyledButton onClick={handleShorten} label={'Shorten'}/>
        </InputContainer>
        {shortenURLs.map((shortUrl:any, index:number) => (
          <ShortUrlCard
            key={index}
            shortUrl={shortUrl.customAlias}
            originalUrl={shortUrl.originalURL}
            onDelete={() => {}}
          />
        ))}
      </OuterCard>
    </StyledShortUrlDisplay>
  );
};

export default ShortUrlDisplay;
