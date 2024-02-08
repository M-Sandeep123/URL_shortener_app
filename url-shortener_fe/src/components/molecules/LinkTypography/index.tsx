import LinkAtom from '../../atoms/Link';
import TypographyAtom from '../../atoms/Text';

interface LinkWithTypographyProps {
  href: string;
  text: string;
}

const LinkWithTypography = ({ href, text }: LinkWithTypographyProps) => {
  return (
    <>
      <LinkAtom href={href}>
        <TypographyAtom text={text} />
      </LinkAtom>
    </>
  );
};

export default LinkWithTypography;
