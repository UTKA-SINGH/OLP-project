import React, { useState, useEffect } from "react";
import axios from "axios";

const UserForm = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ id: "", name: "", email: "" });
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(""); // Error state

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:9090/api/users`);
            setUsers(response.data);
            setError(""); // Clear error on success
        } catch (error) {
            setError("Failed to fetch users. Please try again later.");
            console.error("Fetch Error: ", error);
        }
    };


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user.name || !user.email) {
            setError("Name and Email are required!");
            return;
        }

        try {
            if (editing) {
                await axios.put(`http://localhost:9090/api/users/${user.id}`, user);
            } else {
                await axios.post(`http://localhost:9090/api/users`, user);
            }
        
            setUser({ id: "", name: "", email: "" });
            setEditing(false);
            setError("");
            fetchUsers();
        } catch (error) {
            setError("Failed to save user. Please try again.");
            console.error("Save Error:", error);
        } 
    };

    const editUser = (user) => {
        setUser(user);
        setEditing(true);
        setError("");
    };
    
    const deleteUser = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) {
            return;
        }
    
        try {
            await axios.delete(`http://localhost:9090/api/users/${id}`);
            fetchUsers();
        } catch (error) {
            setError("Failed to delete user. Please try again.");
            console.error("Delete Error:", error);
        }
    };
    
    return (
        <div>
            <h2>{editing ? "Edit User" : "Create User"}</h2>
            {error && <p style={{ color: "red" }}>{error}</p>} 

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={user.name} 
                    placeholder="Enter Name" onChange={handleChange} 
                    required 
                />
                <input type="email" name="email" value={user.email} 
                    placeholder="Enter Email" onChange={handleChange} 
                    required 
                />
                <input type="password" name="password" value={user.password} 
                    placeholder="Enter Password" onChange={handleChange} 
                    required 
                />
                <button type="submit">{editing ? "Update User" : "Create User"}</button>
            </form>

            <h2>User List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => editUser(user)}>Edit</button>
                                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserForm;
