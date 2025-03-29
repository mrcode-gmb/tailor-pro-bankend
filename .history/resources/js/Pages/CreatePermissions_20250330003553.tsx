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
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔐 Manage Permissions</h2>

      {/* Display Messages */}
      {message.text && (
        <div className={`mb-4 p-3 rounded-md text-sm font-medium ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {message.text}
        </div>
      )}

      {/* Create Permission Form */}
      <form onSubmit={handleSubmit} className="flex space-x-2 mb-6">
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

      {/* Table of Permissions */}
      <h3 className="text-lg font-semibold text-gray-700 mb-3">📜 Permission List</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-700 font-semibold">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Permission Name</th>
              <th className="p-3 border">Created By</th>
              <th className="p-3 border">Date Created</th>
            </tr>
          </thead>
          <tbody>
            {permissions.length > 0 ? (
              permissions.map((permission: any, index: number) => (
                <tr key={permission.id} className="text-gray-800 border-b hover:bg-gray-50">
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{permission.name}</td>
                  <td className="p-3 border">{permission.created_by || "Unknown"}</td>
                  <td className="p-3 border">{new Date(permission.created_at).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center text-gray-500 p-3">
                  No permissions added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatePermissions;
