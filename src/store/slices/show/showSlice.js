import { createSlice } from '@reduxjs/toolkit';

export const showSlice = createSlice({
   name: 'show',
   initialState: {
       isShow: false
   },
   reducers: {
        toggleShow: ( state ) => {
            state.isShow = !state.isShow;
        },
    }
});

export const { toggleShow } = showSlice.actions;