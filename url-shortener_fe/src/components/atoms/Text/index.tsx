
import { Typography, TypographyProps } from '@mui/material';

interface TypographyAtomProps extends TypographyProps {
  variant?: 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'button' | 'caption' | 'overline' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
}

const TypographyAtom= ({ variant = 'body1', text, ...rest }: TypographyAtomProps) => {
  return (
    <Typography variant={variant} {...rest}>
      {text}
    </Typography>
  );
};

export default TypographyAtom;
