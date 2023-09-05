import { createSlice } from '@reduxjs/toolkit';

const balance = localStorage.getItem('balance') !== null 
? JSON.parse(localStorage.getItem('balance')) 
: 0;

export const balanceSlice = createSlice({
   name: 'balance',
   initialState: {
       balance: balance
   },
   reducers: {
        totalBalance: ( state, action ) => {
            state.balance = action.payload;
            localStorage.setItem('balance', JSON.stringify(state.balance));
        }
    }
});

export const { totalBalance, incrementBalance } = balanceSlice.actions;