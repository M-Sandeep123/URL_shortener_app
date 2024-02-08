
import TextField from '@mui/material/TextField';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField = ({ label, value, onChange }:FormFieldProps) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputField;
