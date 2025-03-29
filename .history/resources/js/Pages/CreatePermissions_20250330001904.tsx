import React, { useState, useEffect } from "react";
import axios from "axios";

const Permissions = () => {
    const [permissions, setPermissions] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    // Fetch permissions from API
    useEffect(() => {
        axios.get("/api/permissions")
            .then((res) => setPermissions(res.data))
            .catch((err) => console.error(err));
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/permissions", { name })
            .then((res) => {
                setPermissions([...permissions, res.data.permission]);
                setMessage("Permission added successfully!");
                setName(""); // Clear input
            })
            .catch((err) => {
                console.error(err);
                setMessage("Error adding permission.");
            });
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Manage Permissions</h2>

            {message && <div className="text-green-600 mb-2">{message}</div>}

            {/* Create Permission Form */}
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Permission Name"
                    className="border p-2 mr-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add</button>
            </form>

            {/* List Permissions */}
            <h3 className="text-md font-bold">Existing Permissions</h3>
            <ul className="mt-2">
                {permissions.map((permission) => (
                    <li key={permission.id} className="border p-2 my-1">{permission.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Permissions;
