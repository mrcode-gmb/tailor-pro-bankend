import React, { useState, useEffect } from "react";
import axios from "axios";

const CreatePermissions = () => {
  const [permissions, setPermissions]: any = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  // Fetch permissions from API
  useEffect(() => {
    axios
      .get("/api/permissions")
      .then((res) => setPermissions(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name.trim()) return;

    axios
      .post("/api/permissions", { name })
      .then((res: any) => {
        setPermissions([...permissions, res.data.permission]);
        setMessage({ text: "✅ Permission added successfully!", type: "success" });
        setName(""); // Clear input
      })
      .catch((err) => {
        console.error(err);
        setMessage({ text: "❌ Error adding permission.", type: "error" });
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔐 Manage Permissions</h2>

      {/* Display Messages */}
      {message.text && (
        <div className={`mb-4 p-3 rounded-md text-sm font-medium ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {message.text}
        </div>
      )}

      {/* Create Permission Form */}
      <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter permission name"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md transition-all">
          ➕ Add
        </button>
      </form>

      {/* List of Permissions */}
      <h3 className="text-lg font-semibold text-gray-700 mb-2">📜 Existing Permissions</h3>
      <ul className="space-y-2">
        {permissions.length > 0 ? (
          permissions.map((permission: any) => (
            <li key={permission.id} className="flex justify-between items-center border p-3 rounded-md shadow-sm bg-gray-50">
              <span className="text-gray-800">{permission.name}</span>
              <button className="text-red-500 hover:text-red-600 text-sm font-semibold">❌ Remove</button>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No permissions added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default CreatePermissions;
