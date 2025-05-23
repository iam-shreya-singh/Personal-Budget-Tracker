import axios from "axios"

const API_URL = "https://personal-budget-tracker-lss5.onrender.com/api/finance/"

export const fetchTransactions = async (token) => {
  const response = await axios.get(`${API_URL}transactions/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const fetchBudget = async (token) => {
  const response = await axios.get(`${API_URL}budgets/`, {
    headers: {
      Authorization: `Bearer ${token}`},
  })
  return response.data
}
