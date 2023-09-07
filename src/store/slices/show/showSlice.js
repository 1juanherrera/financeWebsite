import { createSlice } from '@reduxjs/toolkit';

export const showSlice = createSlice({
   name: 'show',
   initialState: {
       isShow: false,
       isView: false
   },
   reducers: {
        toggleShow: ( state ) => {
            state.isShow = !state.isShow;
        },
        toggleView: ( state ) => {
            state.isView = !state.isView;
        },
    }
});

export const { toggleShow, toggleView } = showSlice.actions;