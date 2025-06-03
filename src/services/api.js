import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const getItems = async () => {
  const res = await axios.get(API_URL)
  return res.data.slice(0, 5) // Sample limit
}
