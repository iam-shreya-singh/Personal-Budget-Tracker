import create from 'zustand';
import { fetchTransactions, createTransaction } from './api';

const useStore = create((set) => ({
  transactions: [],
  setTransactions: (transactions) => set({ transactions }),
  fetchTransactions: async () => {
    const data = await fetchTransactions();
    set({ transactions: data });
  },
  addTransaction: async (transaction) => {
    const newTransaction = await createTransaction(transaction);
    set((state) => ({
      transactions: [...state.transactions, newTransaction]
    }));
  },
}));

export default useStore;
