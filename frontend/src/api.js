import axios from 'axios';

const API_URL = 'https://personal-budget-tracker-lss5.onrender.com';  // Backend URL
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;


export const fetchTransactions = async () => {
  const response = await axios.get(`${API_URL}transactions/`);
  return response.data;
};

export const fetchBudget = async () => {
  const response = await axios.get(`${API_URL}budgets/`);
  return response.data;
};
