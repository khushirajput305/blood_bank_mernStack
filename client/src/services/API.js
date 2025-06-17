// import axios from "axios";

// const API = axios.create({baseURL:process.env.REACT_APP_BASEURL});

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('token')) {
//     req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//   }
//   return req;
// });
// export default API;
// services/API.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/v1", // ✅ backend ka sahi URL aur port likho
});

// Token headers automatically set karega
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});

export default API;
