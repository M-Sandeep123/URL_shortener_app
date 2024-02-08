import TypographyAtom from '../../atoms/Text';
import InputField from '../../atoms/Input';

interface InputFieldWithLabelProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputFieldWithLabel = ({ label, value, onChange }: InputFieldWithLabelProps) => {
  return (
    <>
      <TypographyAtom text={label} />
      <InputField label={label} value={value} onChange={onChange} />
    </>
  );
};

export default InputFieldWithLabel;
