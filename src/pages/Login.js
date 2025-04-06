// import '../styles/Registration.css';
// import { Link } from "react-router-dom";
// import { Navbar } from '../components/Navbar';
// import { Footer } from '../components/Footer';
// import bann1 from '../images/img1..jpeg';
// import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import axios from "axios";


// const Login = () => {
//     const navigate = useNavigate();
//     const [users, setUsers] = useState([]);
//     const [user, setUser] = useState({ id: "", name: "", email: "" , password: ""});
//     const [editing, setEditing] = useState(false);
//     const [error, setError] = useState(""); // Error state

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get(`http://localhost:9090/api/users`);
//             setUsers(response.data);
//             setError(""); // Clear error on success
//         } catch (error) {
//             setError("Failed to fetch users. Please try again later.");
//             console.error("Fetch Error: ", error);
//         }
//     };


//     const handleChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!user.email || !user.password) {
//             setError("Email and Password are required!");
//             return;
//         }
        

//         try {
//             if (editing) {
//                 await axios.put(`http://localhost:9090/api/users/${user.id}`, user);
//             } else {
//                 await axios.post(`http://localhost:9090/api/users`, user);
//             }
        
//             setUser({ id: "", name: "", email: "", password: ""});
//             setEditing(false);
//             setError("");
//             fetchUsers();

//             navigate("/dashboard"); 
//         } catch (error) {
//             setError("Failed to save user. Please try again.");
//             console.error("Save Error:", error);
//         } 
//     };

//     const editUser = (user) => {
//         setUser(user);
//         setEditing(true);
//         setError("");
//     };
    
//     const deleteUser = async (id) => {
//         if (!window.confirm("Are you sure you want to delete this user?")) {
//             return;
//         }
    
//         try {
//             await axios.delete(`http://localhost:9090/api/users/${id}`);
//             fetchUsers();
//         } catch (error) {
//             setError("Failed to delete user. Please try again.");
//             console.error("Delete Error:", error);
//         }
//     };

//     return (
//         <div className="login">
//             <Navbar />
//             <div className="login_body">
//                 <div className="login_body_leftside">
//                     <h1>Log in to continue<br />your learning journey</h1>
//                     <form className="login_form" onSubmit={handleSubmit}>
//                         <input type="email" placeholder='Email' pattern="\+91[0-9]{10}" required />
//                         <input type="password" placeholder='Password' required />

//                         <button type="submit" className='signup_link'>
//                             {editing ? "Update User" : "Continue with email"}
//                         </button>
//                     </form>
//                     {/* <Link to = "/dashboard" className='signup_link'>Continue with email</Link> */}
//                     <div className="link">
//                     <Link to="/signup" className='login_link'>Login with your organization</Link>
//                     <p>Don't have an account? <Link to="/signup" className='login_link'>Sign up</Link></p>
//                     </div>
//                 </div>
//                 <img src={bann1} alt="study" />
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Login;










import '../styles/Registration.css';
import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import bann1 from '../images/img1..jpeg';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        
        const loginData = { email, password };

        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData)
            });
            
            const data = await response.json();
            if (data.status === "loggedIn"){
                localStorage.setItem("loggedIn", "true");
                navigate("/dashboard", { replace: true });
            } else {
                alert("Login failed! Please Check your credentials.");
            }
        } catch (error) {
            console.error("Login Error:", error);
        }
    };

    return (
        <div className="login">
            <Navbar />
            <div className="login_body">
                <div className="login_body_leftside">
                    <h1>Log in to continue<br />your learning journey</h1>
                    <form className="login_form" onSubmit={handleLogin}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className='signup_link'>
                            {/* {editing ? "Update User" : "Continue with Email"} */}
                            Continue with Email
                        </button>
                    </form>
                    <div className="link">
                        <Link to="/signup" className='login_link'>Login with your organization</Link>
                        <p>Don't have an account? <Link to="/signup" className='login_link'>Sign up</Link></p>
                    </div>
                </div>
                <img src={bann1} alt="study" />
            </div>
            <Footer />
        </div>
    );
};

export default Login;
