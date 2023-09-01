import axios from 'axios'
const getVote = () => (10 * Math.random()).toFixed(0)

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const createNew = async (content) => {
  const object = { content, votes: getVote() }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const like = async (anecdote) => {
  const id = anecdote.id
  const response = await axios.put(`${baseUrl}/${id}`, anecdote)
  return response.data
}

const getAnecdote = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  createNew,
  like,
  getAnecdote
}