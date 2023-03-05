import axios from "axios";

const axiosClinet = axios.create({
  baseURL: "http://localhost:8080/api/",
  header: {
    "content-type": "application/json",
  },
});

const axiosAuth = axios.create({
  baseURL: "http://localhost:8080",
  header: {
    "content-type": "application/json",
  },
});

// method : GET, POST, ...
// endpoint: department, account, position, ....
// payload: data gui len saver
export const api = (method, endpoint, payload) => {
  return axiosClinet(endpoint, { method: method, data: payload })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const apiAuth = (method, endpoint, payload) => {
  return axiosAuth(endpoint, { method: method, data: payload })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
