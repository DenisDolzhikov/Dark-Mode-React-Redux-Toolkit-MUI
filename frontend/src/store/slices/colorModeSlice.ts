import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

interface IColorModeState {
  defaultColorMode: PaletteMode,
  currentColorMode: PaletteMode,
}

const initialState: IColorModeState = {
  defaultColorMode: 'light',
  currentColorMode: 'light',
};

const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    changeCurrentColorMode: (state, action: PayloadAction<PaletteMode>) => {
      state.currentColorMode = action.payload;
    },
  },
});

export default colorModeSlice.reducer;
export const { changeCurrentColorMode } = colorModeSlice.actions;