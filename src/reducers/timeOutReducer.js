import { createSlice } from '@reduxjs/toolkit'

const timeoutSlice = createSlice({
    name: 'timeout',
    initialState: null,
    reducers: {
        setTime(state, action) {
            return action.payload
        },
        clearTime(state, action) {
            clearTimeout(state)
            return null
        }
    }
})

export const {setTime, clearTime} = timeoutSlice.actions
export default timeoutSlice.reducer