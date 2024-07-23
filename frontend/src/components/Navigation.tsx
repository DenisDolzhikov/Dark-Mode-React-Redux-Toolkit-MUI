import { Box, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FC } from 'react';

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Stack direction='row' spacing={2}>
        <Link component={RouterLink} to='/' underline='none' color='inherit'>Home</Link>
        <Link component={RouterLink} to='/about' underline='none' color='inherit'>About Us</Link>
        <Link component={RouterLink} to='/contact' underline='none' color='inherit'>Countact Us</Link>
      </Stack>
    </Box>
  )
};

export default Navigation;