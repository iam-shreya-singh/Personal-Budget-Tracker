// src/pages/Dashboard.jsx
import TransactionList from '../components/TransactionList';
import BudgetForm from '../components/BudgetForm';
import useStore from '../store/useStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { token } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token]);

  return (
    <div>
      <h1> Dashboard</h1>
      <BudgetForm />
      <TransactionList />
    </div>
  );
};

export default Dashboard;