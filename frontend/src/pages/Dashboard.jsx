import useStore from "../store/useStore"
import Login from "./Login"
import ExpenseForm from "../components/ExpenseForm"
import TransactionList from "../components/TransactionList"

export default function Dashboard() {
  const token = useStore((s) => s.token)
  if (!token) return <Login />

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <ExpenseForm />
      <TransactionList />
    </div>
  )
}
