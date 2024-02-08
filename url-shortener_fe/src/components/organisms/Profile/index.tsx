import TypographyAtom from '../../atoms/Text';
import CardMolecule from '../../molecules/Card';
import { styled } from '@mui/system';
import { Paper, Box } from '@mui/material';

const StyledProfile = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
});

const ProfileHeader = styled(Paper)({
  backgroundColor: '#8a2be2', // Custom color for the profile header
  borderRadius: '10px',
  padding: '1rem',
  marginBottom: '1rem',
});

const StyledCardContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const InfoBoxWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.5rem',
  padding: '1rem',
  borderRadius: '5px',
  backgroundColor: '#f0f0f0',
});

const Label = styled(TypographyAtom)({
  fontWeight: 'bold',
  marginRight: '1rem',
});

const Profile = ({ user }: any) => {
  return (
    <StyledProfile>
      <ProfileHeader elevation={3}>
        <TypographyAtom text="Profile" variant="h5" color="#fff" />
      </ProfileHeader>
      <CardMolecule>
        <StyledCardContent>
          <InfoBoxWrapper>
            <Label text="Name:" variant="body1" />
            <TypographyAtom text={user.name} variant="body1" />
          </InfoBoxWrapper>
          <InfoBoxWrapper>
            <Label text="Email:" variant="body1" />
            <TypographyAtom text={user.email} variant="body1" />
          </InfoBoxWrapper>
          <InfoBoxWrapper>
            <Label text="Contact Number:" variant="body1" />
            <TypographyAtom text={user.contactNumber} variant="body1" />
          </InfoBoxWrapper>
        </StyledCardContent>
      </CardMolecule>
    </StyledProfile>
  );
};

export default Profile;
