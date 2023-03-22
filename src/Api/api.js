import axios from "axios";

export const API_KEY = "74d57f329cf22ed2e8677c832d64df34";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "content-type": "application/json",
  },
});

// method : GET, POST, ...
// endpoint: department, account, position, ....
// payload: data gửi lên sever
export const api = async (method, endpoint, payload) => {
  try {
    const res = await axiosClient(endpoint, { method: method, data: payload });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// const axiosAuth = axios.create({
//   baseURL: "http://localhost:8080/auth/",
//   header: {
//     "content-type": "application/json",
//   },
// });

// axiosClinet.interceptors.request.use(async (config) => {
//   const token = localStorage.getItem("accessToken");
//   if (token !== null && token !== undefined) {
//     config.headers.Authorization = "Bearer " + token;
//   }

//   return config;
// });

// export const apiAuth = (method, endpoint, payload) => {
//   return axiosAuth(endpoint, { method: method, data: payload })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
