import { useState } from "react";
import API from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login 🔐</h2>

        <input
          className="w-full p-2 border mb-3 rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-2 border mb-3 rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* 👇 Signup Link */}
        <p
          className="text-center mt-4 text-blue-500 cursor-pointer hover:underline"
          onClick={() => (window.location.href = "/signup")}
        >
          Don't have an account? Signup
        </p>
      </div>
    </div>
  );
}