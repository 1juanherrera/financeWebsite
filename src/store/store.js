import { configureStore } from '@reduxjs/toolkit'
import { balanceSlice } from './slices/balance'
import { showSlice } from './slices/show'
import { currentColorSlice } from './slices/color'

export const store = configureStore({
    reducer: {
        balance: balanceSlice.reducer,
        show: showSlice.reducer,
        currentColor: currentColorSlice.reducer
    }
})