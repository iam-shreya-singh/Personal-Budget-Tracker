// src/store.js
import create from 'zustand';
import axios from 'axios';
import API_BASE_URL from './config';

const useStore = create((set) => ({
  transactions: [],
  
  fetchTransactions: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/transactions/`);
      set({ transactions: response.data });
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  },

  addTransaction: async (transaction) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/transactions/`, transaction);
      set((state) => ({
        transactions: [...state.transactions, response.data],
      }));
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  },
}));

export default useStore;
