import { useState } from "react";
import useStore from "../store/useStore";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useStore((s) => s.setToken);

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/token/", { username, password });
      setToken(res.data.access);
      alert("✅ Logged in");
    } catch {
      alert("❌ Login failed");
    }
  };

  return (
    <form onSubmit={login} className="max-w-sm mx-auto p-4 bg-white shadow rounded">
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-2 p-2 border"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-2 p-2 border"
      />
      <button className="w-full bg-emerald-500 text-white py-2 rounded">Login</button>
    </form>
  );
}