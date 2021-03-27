import axios from '../axios'

const fetchData = async (path, config) => await axios.get(path, config)
  .then(res => ({
    error: false,
    data: res.data,
  }))
  .catch(err => ({
      error: true,
      data: null,
    }),
  );

export default fetchData;