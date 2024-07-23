import { FC } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { DarkMode, LightMode } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from '../store';
import { changeCurrentColorMode } from '../store/slices/colorModeSlice';

const ColorModeSelect: FC = () => {
  const dispatch = useAppDispatch();
  const currentColorMode = useAppSelector(state => state.colorModeState.currentColorMode);

  const handleChangeColorMode = () => {
    if (currentColorMode === 'dark') {
      dispatch(changeCurrentColorMode('light'));
    } else {
      dispatch(changeCurrentColorMode('dark'));
    }
  }

  return (
    <Tooltip title='Color mode'>
      <IconButton onClick={handleChangeColorMode}>
        {currentColorMode === 'dark' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  )
};

export default ColorModeSelect;