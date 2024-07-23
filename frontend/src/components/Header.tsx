import { FC } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ColorModeSelect from './ColorModeSelect';
import Navigation from './Navigation';

const Header: FC = () => {
  return (
      <AppBar>
        <Box>
          <Toolbar sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
              >
                <MenuIcon />
              </IconButton>

              <Navigation  />
            </Box>

            <ColorModeSelect />
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </Box>
      </AppBar>
  )
};

export default Header;