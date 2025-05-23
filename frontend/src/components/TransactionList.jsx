import { useEffect } from "react"
import useStore from "../store/useStore"
import axios from "axios"

export default function TransactionList() {
  const token = useStore((s) => s.token)
  const transactions = useStore((s) => s.transactions)
  const setTransactions = useStore((s) => s.setTransactions)

  useEffect(() => {
    if (!token) return
    axios.get("/api/finance/transactions/", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setTransactions(res.data))
  }, [token])

  return (
    <ul className="space-y-2">
      {transactions.map(tx => (
        <li key={tx.id} className="flex justify-between border-b p-2">
          <span>{tx.note}</span>
          <span className="text-emerald-600 font-medium">₹{tx.amount}</span>
        </li>
      ))}
    </ul>
  )
}