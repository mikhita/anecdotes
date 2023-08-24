import { useSelector, useDispatch } from "react-redux"
import { voteAnecdoteOf } from "../reducers/anecdoteReducer"

const AnecdoteList = () =>{
  
  const dispatch = useDispatch();

  const anecdotes = useSelector((state) => {
    const filter = state.filter;
    const filteredAnecdotes = state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    );
    const sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes);
    return sortedAnecdotes;
  });


  const vote = (id) => {
    dispatch(voteAnecdoteOf(id))
  }
  const filteredByVotesNumberAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)

  return(
    <>
    {filteredByVotesNumberAnecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
    </>
  )
}

export default AnecdoteList 