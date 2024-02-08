
import Button, { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends ButtonProps {
  onClick: () => void;
  label: string;
}

const CustomButton = ({ onClick, label, ...rest }:CustomButtonProps) => {
  return (
    <Button variant="contained" onClick={onClick} {...rest}>
      {label}
    </Button>
  );
};

export default CustomButton;
