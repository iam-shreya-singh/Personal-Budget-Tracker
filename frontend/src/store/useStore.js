// src/store/useStore.js
import { create } from 'zustand';
import axios from 'axios';

// Your deployed API endpoint:
const API_URL = 'https://personal-budget-tracker-lss5.onrender.com/api/finance/';

const useStore = create((set, get) => ({
  token: null,
  transactions: [],
  budget: null,

  setToken: (token) => set({ token }),

  fetchTransactions: async () => {
    try {
      const response = await axios.get(`${API_URL}transactions/`, {
        headers: { Authorization: `Bearer ${get().token}` },
      });
      set({ transactions: response.data });
    } catch (err) {
      console.error('Error fetching transactions:', err);
    }
  },

  addTransaction: async (txn) => {
    try {
      const response = await axios.post(`${API_URL}transactions/`, txn, {
        headers: { Authorization: `Bearer ${get().token}` },
      });
      set((state) => ({
        transactions: [...state.transactions, response.data],
      }));
    } catch (err) {
      console.error('Error adding transaction:', err);
    }
  },

  fetchBudget: async () => {
    try {
      const response = await axios.get(`${API_URL}budgets/`, {
        headers: { Authorization: `Bearer ${get().token}` },
      });
      set({ budget: response.data });
    } catch (err) {
      console.error('Error fetching budget:', err);
    }
  },

  setBudget: async (amount, month) => {
    try {
      const response = await axios.post(
        `${API_URL}budgets/`,
        { amount, month },
        {
          headers: {
            Authorization: `Bearer ${get().token}`,
          },
        }
      );
      set({ budget: response.data });
    } catch (err) {
      console.error('Error setting budget:', err);
    }
  },
}));

export default useStore;