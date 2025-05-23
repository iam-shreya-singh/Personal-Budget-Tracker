import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { fetchTransactions, fetchBudget } from '../api';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    fetchTransactions().then(setTransactions);
    fetchBudget().then(setBudget);
  }, []);

  useEffect(() => {
    if (transactions.length && budget) {
      drawChart(transactions, budget);
    }
  }, [transactions, budget]);

  const drawChart = (transactions, budget) => {
    // D3.js code to visualize data
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {/* D3.js chart goes here */}
    </div>
  );
};

export default Dashboard;
