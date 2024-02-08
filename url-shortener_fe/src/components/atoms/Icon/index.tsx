
import { IconButton, IconButtonProps } from '@mui/material';

interface IconButtonAtomProps extends IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const IconButtonAtom = ({ icon, onClick, ...rest }: IconButtonAtomProps) => {
  return (
    <IconButton onClick={onClick} {...rest}>
      {icon}
    </IconButton>
  );
};

export default IconButtonAtom;
