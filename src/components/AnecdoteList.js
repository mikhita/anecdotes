import { useSelector, useDispatch } from "react-redux"
import { voteAnecdoteOf } from "../reducers/anecdoteReducer"
import { removeNotification, setNotification } from "../reducers/notificationReducer";
import Notification from "./Notification";


const AnecdoteList = () =>{
  const dispatch = useDispatch();

  const notification = useSelector(state => state.notification)

  const anecdotes = useSelector((state) => {
    const filter = state.filter;
    const filteredAnecdotes = state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    );
    const sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes);
    return sortedAnecdotes;
  });


  const vote = (id, content) => { // Add 'content' parameter
    dispatch(voteAnecdoteOf(id));
    dispatch(setNotification(`You voted for an anecdote: ${content}`)); // Include content in the notification message
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };

  const filteredByVotesNumberAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)

  return(
    <>
    <Notification notification={notification} />
    {filteredByVotesNumberAnecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
        </div>
      </div>
    )}
    </>
  )
}

export default AnecdoteList 