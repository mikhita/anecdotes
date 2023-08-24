const getId = () => (100000 * Math.random()).toFixed(0)


const anecdotesAtStart = [
  {
    content: 'If it hurts, do it more often',
    votes: getId(),
    id: getId()
  },
  {
    content: 'Adding manpower to a late software project makes it later!',
    votes: getId(),
    id: getId()
  },
  {
    content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: getId(),
    id: getId()
  },
  {
    content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: getId(),
    id: getId()
  },
  {
    content: 'Premature optimization is the root of all evil.',
    votes: getId(),
    id: getId()
  },
  {
    content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: getId(),
    id: getId()
  }
]


// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: getId()
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)
const initialState = anecdotesAtStart


export const voteAnecdoteOf = (id) => {
  return {
    type: 'VOTE_ANECDOTE',
    payload: { id }
  }
}

export const createAnecdote = (content) => {
  return{
    type: 'NEW_ANECDOTE',
    payload: {
      content,
      votes: getId(),
      id: getId()
    }
  }

}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEW_ANECDOTE' : 
      return [ ...state, action.payload ]
    case 'VOTE_ANECDOTE':
      const id = action.payload.id
      const anecdoteToVote = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: Number(anecdoteToVote.votes) + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    default:
      return state
  }
}

export default reducer