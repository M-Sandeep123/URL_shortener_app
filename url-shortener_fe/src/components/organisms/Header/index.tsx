import { useEffect, useState } from 'react';
import TypographyAtom from '../../atoms/Text';
import CustomButton from '../../atoms/Button';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router';

const StyledHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  borderBottom: '1px solid #ccc',
  backgroundColor: '#f0f0f0',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const Logo = styled('div')({
  flex: 1,
});

const ButtonsWrapper = styled('div')({
  display: 'flex',
  gap: '1rem',
});

const Header = () => {

  const navigate = useNavigate();
  const [token, setToken] = useState("");
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token)
    setToken(token)
  },[]);
  const handleOnClickLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user-data");
    navigate("/signin");
  }

  return (
    <StyledHeader>
      <Logo>
        <TypographyAtom text="URL Shortener App" variant="h4" />
      </Logo>
      <ButtonsWrapper>
        <CustomButton label="Home" onClick={()=>{navigate("/")}}/>
        <CustomButton label="Profile" onClick={()=>{navigate("/profile")}} />
        {token=="" && <CustomButton label="Signup" onClick={()=>{navigate("/signup")}} />}
        {token=="" && <CustomButton label="Signin" onClick={()=>{navigate("/signin")}} />}
        {token!="" && <CustomButton label="Logout" onClick={handleOnClickLogout} />}
      </ButtonsWrapper>
    </StyledHeader>
  );
};

export default Header;
