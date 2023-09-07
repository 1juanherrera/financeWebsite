import { createSlice } from '@reduxjs/toolkit';

export const currentColorSlice = createSlice({
   name: 'currentColor',
   initialState: {
       currentColor: '#F44336'
   },
   reducers: {
        changeCurrentColor: ( state, action ) => {
            state.currentColor = action.payload;
        },
    }
});

export const { changeCurrentColor } = currentColorSlice.actions;