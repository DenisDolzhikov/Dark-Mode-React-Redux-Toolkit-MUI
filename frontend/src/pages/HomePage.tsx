import { Container, Typography } from '@mui/material';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <Container>
      <Typography component='h1' variant='h1' textAlign='center'>
        Home page
      </Typography>
    </Container>
  )
};

export default HomePage;