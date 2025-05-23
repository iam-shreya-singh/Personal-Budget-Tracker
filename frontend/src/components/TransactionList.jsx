import React, { useEffect } from 'react';
import useStore from './store';

const TransactionList = () => {
  const { transactions, fetchTransactions, addTransaction } = useStore();

  useEffect(() => {
    fetchTransactions();  // Fetch transactions on component mount
  }, [fetchTransactions]);

  const handleAddTransaction = () => {
    const newTransaction = {
      amount: 100,
      category: 'income',
      description: 'Salary',
      date: '2025-05-23',
    };
    addTransaction(newTransaction);
  };

  return (
    <div>
      <h1>Transactions</h1>
      <button onClick={handleAddTransaction}>Add Transaction</button>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
