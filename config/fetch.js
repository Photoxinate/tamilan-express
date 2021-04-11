import axios from '../axios'

const fetch = async (path, config) => await axios.get(path, config)
  .then(res => {
    
    return {
      error: false,
      data: res.data,
    }
  })
  .catch(err => {
    
    return {
      error: true,
      data: null,
    }
  });

export default fetch;