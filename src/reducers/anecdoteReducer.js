import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdoteService"

// const getId = () => (100000 * Math.random()).toFixed(0)
// const getVote = () => (10 * Math.random()).toFixed(0)



// const anecdotesAtStart = [
//   {
//     content: 'If it hurts, do it more often',
//     votes: getVote(),
//     id: getId()
//   },
//   {
//     content: 'Adding manpower to a late software project makes it later!',
//     votes: getVote(),
//     id: getId()
//   },
//   {
//     content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     votes: getVote(),
//     id: getId()
//   },
//   {
//     content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     votes: getVote(),
//     id: getId()
//   },
//   {
//     content: 'Premature optimization is the root of all evil.',
//     votes: getVote(),
//     id: getId()
//   },
//   {
//     content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     votes: getVote(),
//     id: getId()
//   }
// ]


// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: getId()
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)
// const initialState = anecdotesAtStart


// export const voteAnecdoteOf = (id) => {
//   return {
//     type: 'VOTE_ANECDOTE',
//     payload: { id }
//   }
// }

// export const createAnecdote = (content) => {
//   return{
//     type: 'NEW_ANECDOTE',
//     payload: {
//       content,
//       votes: getId(),
//       id: getId()
//     }
//   }

// }

// const anecdotReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case 'NEW_ANECDOTE' : 
//       return [ ...state, action.payload ]
//     case 'VOTE_ANECDOTE':
//       const id = action.payload.id
//       const anecdoteToVote = state.find(a => a.id === id)
//       const changedAnecdote = {
//         ...anecdoteToVote,
//         votes: Number(anecdoteToVote.votes) + 1
//       }
//       return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
//     default:
//       return state
//   }
// }
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    // createAnecdote(state, action) {
    //   // const content = action.payload
    //   // state.push({
    //   //   content,
    //   //   votes: getVote(),
    //   //   id: getId(),
    //   // })
    //   state.push(action.payload)
    // },
    // voteAnecdoteOf(state, action) {
    //   const id = action.payload
    //   const anecdoteToVote = state.find(a => a.id === id)
    //   const changedAnecdote = {
    //     ...anecdoteToVote,
    //     votes: Number(anecdoteToVote.votes) + 1
    //   }
    //   return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)   
    // },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const initializeAnecdotes = () => {
  return async dispatch =>{
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = id => {
  return async dispatch => {
    const anecdote = await anecdoteService.getAnecdote(id)
    const likedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    await anecdoteService.like(likedAnecdote)
    dispatch(initializeAnecdotes())
  }
}


export const { appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer