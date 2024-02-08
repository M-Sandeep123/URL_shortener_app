import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  maxWidth: '300px',
  margin: '0 auto'
});

const StyledTextField = styled(TextField)({
  width: '100%'
});

const SignInButton = styled(Button)({
  width: '100%'
});

export interface SignInFormData{
  email: string,
  password: string
}

interface SignInFormProps {
  onSubmit: (formData: SignInFormData) => void;
  token: string
}


const SignInForm = ({ onSubmit }: SignInFormProps) => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>
      <StyledTextField
        label="Email"
        variant="outlined"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <StyledTextField
        label="Password"
        type="password"
        variant="outlined"
        value={formData.password}
        onChange={(e) => handleChange('password', e.target.value)}
      />
      <SignInButton
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Sign In
      </SignInButton>
    </FormContainer>
  );
};

export default SignInForm;
