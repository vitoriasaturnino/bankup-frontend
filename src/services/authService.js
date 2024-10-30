// src/services/authService.js
import axios from "axios";

const API_URL = "http://localhost:4000/api";

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/clients`, { client: userData });
  localStorage.setItem("token", response.data.data.token);
  localStorage.setItem("client_id", response.data.data.client.id);
  return response.data.data;
};

const login = async (email) => {
  const response = await axios.post(`${API_URL}/clients/login`, { email });
  localStorage.setItem("token", response.data.data.token);
  localStorage.setItem("client_id", response.data.data.client_id);
  return response.data.data;
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("client_id");
};

export default { register, login, logout };
