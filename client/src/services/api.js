import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getComponents = async () => {
  const response = await axios.get(`${API_URL}/components`);
  return response.data;
};
