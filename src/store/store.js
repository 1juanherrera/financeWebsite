import { configureStore } from '@reduxjs/toolkit'
import { balanceSlice } from './slices/balance'
import { showSlice } from './slices/show'
import { currentColorSlice } from './slices/color'
import { dataSlice } from './slices/data/dataSlice'

export const store = configureStore({
    reducer: {
        balance: balanceSlice.reducer,
        show: showSlice.reducer,
        currentColor: currentColorSlice.reducer,
        data: dataSlice.reducer
    }
})