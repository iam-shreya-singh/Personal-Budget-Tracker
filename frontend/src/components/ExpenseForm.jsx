import { useState } from "react"
import useStore from "../store/useStore"
import axios from "axios"

export default function ExpenseForm() {
  const [note, setNote] = useState("")
  const [amount, setAmount] = useState("")
  const token = useStore((s) => s.token)

  const submit = async (e) => {
    e.preventDefault()
    await axios.post("/api/finance/transactions/", {
      note,
      amount,
      t_type: "EX",
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    window.location.reload()
  }

  return (
    <form onSubmit={submit} className="bg-white p-4 shadow rounded-xl">
      <h2 className="text-lg font-bold mb-2">Add Expense</h2>
      <input placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} className="w-full mb-2 p-2 border" />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full mb-2 p-2 border" />
      <button className="bg-emerald-600 text-white w-full py-2 rounded">Add</button>
    </form>
  )
}
