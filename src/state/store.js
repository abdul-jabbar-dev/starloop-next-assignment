import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/builder/pcBuilder'

export const store = configureStore({
    reducer: {
        builder: counterSlice
    },
})