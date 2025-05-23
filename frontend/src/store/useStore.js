import create from "zustand";

const useStore = create((set) => ({
  token: null,
  transactions: [],

  setToken: (token) => set({ token }),
  setTransactions: (transactions) => set({ transactions }),
}));

export default useStore;