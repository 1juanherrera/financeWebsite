import { createSlice } from '@reduxjs/toolkit';



export const dataSlice = createSlice({
   name: 'data',
   initialState: {
        description: '',
        price: '',
        color: '',
   },
   reducers: {
        totalData: ( state, action ) => {
            state.tempData = action.payload;
            //localStorage.setItem('data', JSON.stringify(state.data));
        }
    }
});

export const { totalData } = dataSlice.actions;