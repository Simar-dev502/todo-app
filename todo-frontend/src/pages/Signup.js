import { useState } from "react";
import API from "../api";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password) {
      return alert("All fields required ❗");
    }

    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Signup successful 🎉");
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed ❌");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup ✍️</h2>

        <input
          className="w-full p-2 border rounded mb-3"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-2 border rounded mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          onClick={handleSignup}
        >
          Signup
        </button>

        {/* 🔐 Back to Login */}
        <p
          className="text-center mt-4 text-blue-500 cursor-pointer hover:underline"
          onClick={() => (window.location.href = "/")}
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}