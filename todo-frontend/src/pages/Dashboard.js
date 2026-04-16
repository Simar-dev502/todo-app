import { useState, useEffect } from "react";
import API from "../api";

export default function Dashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // 🔒 Protect route
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
    getTasks();
  }, []);

  // 📥 Get tasks
  const getTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // ➕ Add task
  const addTask = async () => {
    if (!task) return alert("Enter task");

    try {
      await API.post("/tasks", { title: task });
      setTask("");
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  // ❌ Delete task
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ Complete task
  const completeTask = async (id) => {
    try {
      await API.put(`/tasks/${id}`, { status: "completed" });
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* 🔝 Navbar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">📋 My Tasks</h2>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      {/* ➕ Add Task */}
      <div className="flex gap-2 mb-6">
        <input
          className="p-3 border rounded w-full focus:outline-none"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
        />
        <button
          className="bg-blue-500 text-white px-6 rounded hover:bg-blue-600"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      {/* 📭 Empty State */}
      {tasks.length === 0 && (
        <p className="text-gray-500 text-center">No tasks yet 🚀</p>
      )}

      {/* 📋 Task List */}
      <div className="grid md:grid-cols-2 gap-4">
        {tasks.map((t) => (
          <div
            key={t._id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{t.title}</h3>

            {/* 🟢 Status */}
            <p
              className={`text-sm mt-1 ${
                t.status === "completed"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              {t.status}
            </p>

            {/* 🔘 Actions */}
            <div className="mt-3 flex gap-3">
              <button
                className="text-green-600 hover:underline"
                onClick={() => completeTask(t._id)}
              >
                Complete
              </button>

              <button
                className="text-red-500 hover:underline"
                onClick={() => deleteTask(t._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}