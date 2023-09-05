import { configureStore } from '@reduxjs/toolkit'
import { balanceSlice } from './slices/balance'
import { showSlice } from './slices/show'

export const store = configureStore({
    reducer: {
        balance: balanceSlice.reducer,
        show: showSlice.reducer
    }
})