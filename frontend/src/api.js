import axios from 'axios';

// API base URL (adjust if your backend URL changes)
const API_URL = 'http://127.0.0.1:8000/api/';

export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${API_URL}transactions/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

export const createTransaction = async (transaction) => {
  try {
    const response = await axios.post(`${API_URL}transactions/`, transaction);
    return response.data;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
};
