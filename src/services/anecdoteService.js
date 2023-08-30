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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  createNew,
}