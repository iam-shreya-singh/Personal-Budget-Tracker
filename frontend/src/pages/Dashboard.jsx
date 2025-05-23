import React, { useEffect, useState } from "react"
import * as d3 from "d3"
import useStore from "../store/useStore"
import Login from "./Login"
import { fetchTransactions, fetchBudget } from "../api"

const Dashboard = () => {
  const token = useStore((s) => s.token)
  const [transactions, setTransactions] = useState([])
  const [budget, setBudget] = useState(null)

  useEffect(() => {
    if (!token) return
    fetchTransactions(token).then(setTransactions)
    fetchBudget(token).then(setBudget)
  }, [token])

  useEffect(() => {
    if (transactions.length && budget) {
      drawChart(transactions, budget)
    }
  }, [transactions, budget])

  const drawChart = (transactions, budget) => {
    // D3 code will go here
    console.log("🎯 Drawing chart with:", transactions, budget)
  }

  if (!token) return <Login />

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard</h1>
      <div id="chart" className="bg-white shadow p-4 rounded-lg mb-6">
        {/* D3.js chart renders here */}
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Recent Transactions</h2>
        <ul className="divide-y">
          {transactions.map((tx) => (
            <li key={tx.id} className="flex justify-between py-2">
              <span>{tx.note}</span>
              <span className="text-emerald-600 font-medium">₹{tx.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
