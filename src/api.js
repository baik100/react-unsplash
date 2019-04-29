import axios from 'axios';
import {UNSPLASH_API_KEY, UNSPLASH_API_URL} from './helpers/ConstsHelper';

const api = {
  getPhoto: async () => {
    return axios.get(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_API_KEY}`)
      .then(res => {
        console.log("@@@@@ data", res.data);
        return res.data;
      })
      .catch(function (error) {
        console.log(error);
      })
  },

  searchPhoto: (query) => {
    return axios.get(`${UNSPLASH_API_URL}?query=${query}&client_id=${UNSPLASH_API_KEY}`)
      .then(res => {
        console.log("@@@@@ data", res.data);
        return res.data.results;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

export default api;
