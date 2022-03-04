import axios from "axios";

let url = "http://localhost:5000/api/register";
let authUrl = "http://localhost:5000/api/auth";

export async function registerUser(user) {
  return axios.post(url, user);
}

export async function loginUser(email, password) {
  const { data: jwt } = await axios.post(authUrl, { email, password });
  return localStorage.setItem("token", jwt);
}
