import { createSlice } from '@reduxjs/toolkit'

const initialState = { listBuilder: {}, count: 0 }

export const counterSlice = createSlice({
    name: 'builder',
    initialState,
    reducers: {
        addToBuild: (state, action) => {
            if (action.payload.category) {
                state.listBuilder[action.payload.category] = action.payload
                state.count++
            }
        }, removeFromBuild: (state, action) => {
            if (action.payload.category) {
                state.listBuilder[action.payload.category] = undefined
                state.count--
            }
        },
    },
})

export const { addToBuild, removeFromBuild } = counterSlice.actions

export default counterSlice.reducer