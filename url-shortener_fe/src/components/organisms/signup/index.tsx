import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

export interface FormData {
  firstName?: string;
  lastName?: string;
  email: string;
  contactNumber?: string;
  password: string;
}

interface SignUpFormProps {
  onSubmit: (formData: FormData) => void;
}

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

const SignUpButton = styled(Button)({
  width: '100%'
});

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
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
        Sign Up
      </Typography>
      <StyledTextField
        label="First Name"
        variant="outlined"
        value={formData.firstName}
        onChange={(e) => handleChange('firstName', e.target.value)}
      />
      <StyledTextField
        label="Last Name"
        variant="outlined"
        value={formData.lastName}
        onChange={(e) => handleChange('lastName', e.target.value)}
      />
      <StyledTextField
        label="Email"
        variant="outlined"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <StyledTextField
        label="Contact Number"
        variant="outlined"
        value={formData.contactNumber}
        onChange={(e) => handleChange('contactNumber', e.target.value)}
      />
      <StyledTextField
        label="Password"
        type="password"
        variant="outlined"
        value={formData.password}
        onChange={(e) => handleChange('password', e.target.value)}
      />
      <SignUpButton
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Sign Up
      </SignUpButton>
    </FormContainer>
  );
};

export default SignUpForm;
