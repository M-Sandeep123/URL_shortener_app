
import { Link, LinkProps } from '@mui/material';

const LinkAtom = ({ children, ...rest } : LinkProps) => {
  return <Link {...rest}>{children}</Link>;
};

export default LinkAtom;
