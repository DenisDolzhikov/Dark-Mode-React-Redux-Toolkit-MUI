import { FC } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Container } from '@mui/material';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: '5rem', minHeight: '85vh' }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
};

export default Layout;