import '../styles/Registration.css';
import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import bann1 from '../images/img1..jpeg';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SignUp = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ id: "", name: "", email: "" , password: ""});
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(""); // Error state

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/users`);
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
                await axios.put(`http://localhost:8080/api/users/${user.id}`, user);
            } else {
                await axios.post(`http://localhost:8080/api/users`, user);
            }
        
            setUser({ id: "", name: "", email: "", password: ""});
            setEditing(false);
            setError("");
            fetchUsers();

            navigate("/dashboard"); 
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
            await axios.delete(`http://localhost:8080/api/users/${id}`);
            fetchUsers();
        } catch (error) {
            setError("Failed to delete user. Please try again.");
            console.error("Delete Error:", error);
        }
    };

    return (
        <div className="signup">
            <Navbar />
            <div className="signup_body">
                <div className="signup_body_leftside">
                    <h1>Sign up to continue<br/>your learning journey</h1>
                        <form className="signup_form1" onSubmit={handleSubmit}>
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

                            <button type="submit" className='signup_link'>
                                {editing ? "Update User" : "Create Account"}
                            </button>
                        </form>
                        {/* <Link to = "/dashboard" className='signup_link'>Create Account</Link> */}
                    <p>By signing up, you agree to our <Link to="">Terms of Use</Link> and <Link to="">Privacy Policy.</Link></p>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
                <img src={bann1} alt="study" />
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;