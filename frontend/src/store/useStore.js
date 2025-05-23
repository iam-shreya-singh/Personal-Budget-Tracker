// src/store/useStore.js
import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'https://personal-budget-tracker-lss5.onrender.com/api/finance/';

const useStore = create((set, get) => ({
  token: null, // optional auth setup
  transactions: [],

  setToken: (token) => set({ token }),

  fetchTransactions: async () => {
    try {
      const response = await axios.get(`${API_URL}transactions/`, {
        headers: {
          Authorization: `Bearer ${get().token}`,
        },
      });
      set({ transactions: response.data });
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    }
  },

  addTransaction: async (newTxn) => {
    try {
      const response = await axios.post(
        `${API_URL}transactions/`,
        newTxn,
        {
          headers: {
            Authorization: `Bearer ${get().token}`,
          },
        }
      );
      set((state) => ({
        transactions: [...state.transactions, response.data],
      }));
    } catch (error) {
      console.error('Failed to add transaction:', error);
    }
  },
}));

export default useStore;