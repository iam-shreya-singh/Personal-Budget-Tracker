import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';  // Backend URL
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;


export const fetchTransactions = async () => {
  const response = await axios.get(`${API_URL}transactions/`);
  return response.data;
};

export const fetchBudget = async () => {
  const response = await axios.get(`${API_URL}budgets/`);
  return response.data;
};
