// src/pages/Login.jsx
import { useState } from "react";
import useStore from "../store/useStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useStore((s) => s.setToken);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/token/`,
        { username, password }
      );
      setToken(res.data.access); // ✅ Save token to Zustand
      alert("✅ Logged in");
      navigate("/dashboard"); // 🔄 Redirect after login
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("❌ Login failed: Check username or password");
    }
  };

  return (
    <form onSubmit={login} className="max-w-sm mx-auto p-4 bg-white shadow rounded">
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-2 p-2 border"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-2 p-2 border"
        required
      />
      <button
        type="submit"
        className="w-full bg-emerald-500 text-white py-2 rounded"
      >
        Login
      </button>
    </form>
  );
}