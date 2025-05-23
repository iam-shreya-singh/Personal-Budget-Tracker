// src/components/BudgetForm.jsx
import { useEffect, useState } from 'react';
import useStore from '../store/useStore';

const BudgetForm = () => {
  const { budget, fetchBudget, setBudget, token } = useStore();
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('');

  useEffect(() => {
    if (token) {
      fetchBudget();
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setBudget(amount, month);
    setAmount('');
    setMonth('');
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>🎯 Monthly Budget</h2>

      {budget ? (
        <p>
          Budget for {budget.month}: <strong>₹{budget.amount}</strong>
        </p>
      ) : (
        <p>No budget set yet.</p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        />
        <button type="submit">💾 Save Budget</button>
      </form>
    </div>
  );
};

export default BudgetForm;