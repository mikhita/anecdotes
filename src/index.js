import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createStore, combineReducers } from 'redux'
import anecdoteService from './services/anecdoteService'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer , { setAnecdotes } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

// const reducer = combineReducers({
//   anecdotes: anecdoteReducer,
//   filter: filterReducer
// })

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
})
anecdoteService.getAll().then(anecdotes =>
    store.dispatch(setAnecdotes(anecdotes))
)

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)