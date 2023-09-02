import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import timeOutReducer from './reducers/timeOutReducer'

const store = configureStore({
    reducer:
    {
        anecdotes: anecdoteReducer,
        notification: notificationReducer,
        filter: filterReducer,
        timeout: timeOutReducer
    }
})

export default store