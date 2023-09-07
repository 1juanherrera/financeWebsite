import { createSlice } from '@reduxjs/toolkit';

const tempData = localStorage.getItem('data') !== null 
? JSON.parse(localStorage.getItem('data')) 
: {
    description: '',
    price: '',
    color: '',
};

export const dataSlice = createSlice({
   name: 'data',
   initialState: {
       data: [
        tempData
       ]
   },
   reducers: {
        totalData: ( state, action ) => {
            state.data = action.payload;
            localStorage.setItem('data', JSON.stringify(state.data));
        }
    }
});

export const { totalData } = dataSlice.actions;