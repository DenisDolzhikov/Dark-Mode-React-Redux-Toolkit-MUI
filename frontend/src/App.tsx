import './App.css'
import { RouterProvider } from 'react-router-dom';
import { useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { themeSettings } from './theme';
import { createTheme, CssBaseline } from '@mui/material';
import { useAppSelector } from './store';
import router from './router';

function App() {
  const colorMode = useAppSelector(state => state.colorModeState.currentColorMode);
  const theme = useMemo(() => createTheme(themeSettings(colorMode)), [colorMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App;
