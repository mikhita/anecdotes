import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer";
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


  // const vote = (id, content) => { 
  //   dispatch(voteAnecdoteOf(id));
  //   dispatch(setNotification(`You voted for an anecdote: ${content}`)); 
  //   setTimeout(() => {
  //     dispatch(removeNotification());
  //   }, 5000);
  // };
  const vote = (id) => {
    const voted = anecdotes.find( a => a.id === id)
    dispatch(voteAnecdote(id))
    dispatch(setNotification(`You voted '${voted.content}'`, 5))
    
}

  const filteredByVotesNumberAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)

  return(
    <>
    <Notification notification={notification} />
    <div style={{paddingTop: "60px"}}>
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
    </div>
    </>
  )
}

export default AnecdoteList 