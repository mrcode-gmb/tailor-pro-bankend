import React, { useState, useEffect } from "react";
import axios from "axios";

const CreatePermissions = () => {
  const [permissions, setPermissions] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Fetch permissions from API
  useEffect(() => {
    axios.get("/api/permissions")
      .then((res) => setPermissions(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("/api/permissions", { name })
      .then((res) => {
        setPermissions([...permissions, res.data.permission]);
        setMessage("✅ Permission added successfully!");
        setName(""); // Clear input
        setTimeout(() => setMessage(""), 3000); // Hide message after 3s
      })
      .catch((err) => {
        console.error(err);
        setMessage("❌ Error adding permission.");
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Permissions</h2>

      {/* Success/Error Message */}
      {message && (
        <div className={`text-sm p-2 mb-3 text-center rounded ${message.includes("Error") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
          {message}
        </div>
      )}

      {/* Create Permission Form */}
      <form onSubmit={handleSubmit} className="flex items-center space-x-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Permission Name"
          className="flex-1 border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300 outline-none"
          required
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          Add
        </button>
      </form>

      {/* List Permissions */}
      <h3 className="text-lg font-semibold text-gray-700 mt-6">Existing Permissions</h3>
      <ul className="mt-2 space-y-2">
        {permissions.length > 0 ? (
          permissions.map((permission) => (
            <li key={permission.id} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <span className="text-gray-700">{permission.name}</span>
              <button className="text-red-500 hover:text-red-700 text-sm">✖</button>
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
