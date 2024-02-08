import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const StyledCard = styled(Paper)({
  padding: '1rem',
  margin: '1rem',
});

const CardMolecule = ({ children }: any) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

export default CardMolecule;
