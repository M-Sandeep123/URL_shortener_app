import React from "react";
import TypographyAtom from "../../atoms/Text";
import IconButtonAtom from "../../atoms/Icon";


interface IconTypographyProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const IconTypography= ({
  onClick,
  icon,
  label,
} : IconTypographyProps) => {
  return (
    <>
      <IconButtonAtom onClick={onClick} icon={icon} />
      <TypographyAtom text={label} />
    </>
  );
};

export default IconTypography;
