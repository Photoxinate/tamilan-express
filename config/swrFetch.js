import axios from '../axios'

const swrFetch = async (path, config) => await axios.get(path, config)
  .then(res => {
    return res.data
  })

export default swrFetch;