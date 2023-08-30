import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import anecdoteService from "../services/anecdoteService";


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newAnecdote))
  }
  return (
    <>
    <h2>create new</h2>
    <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button>create</button>
    </form>
    </>
  )
}

export default AnecdoteForm