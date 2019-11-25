import axios from 'axios';

const { REACT_APP_SVR_API } = process.env;

function doStuff() {
  return axios;
}

export default { doStuff };
