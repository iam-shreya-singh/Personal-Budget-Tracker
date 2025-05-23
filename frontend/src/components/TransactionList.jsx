import { useEffect } from "react";
import useStore from "./store";

const TransactionList = () => {
  const { transactions, fetchTransactions, addTransaction, token } = useStore();

  useEffect(() => {
    if (token) fetchTransactions();
  }, [token]);

  const handleAddTransaction = () => {
    const newTransaction = {
      amount: 100,
      note: "Freelance Work",
      t_type: "IN", // or "EX"
      date: new Date().toISOString().slice(0, 10), // "YYYY-MM-DD"
    };
    addTransaction(newTransaction);
  };

  return (
    <div>
      <h1>Transactions</h1>
      <button onClick={handleAddTransaction}>Add Transaction</button>
      <ul>
        {transactions.map((txn) => (
          <li key={txn.id}>
            {txn.note} - ₹{txn.amount} ({txn.t_type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;