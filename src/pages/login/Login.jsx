// import React, { useState } from 'react';
// import "./login.css";
// import { Link, useNavigate } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';

// const Login = ({ setIsAuth }) => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();


//     const SignIn = (event) => {
//         event.preventDefault();
//         console.log("Username entered:", username);
//         console.log("Password entered:", password);

//         if (username === "saikumararava" && password === "$1HappyNewYear") {
//             console.log("Credentials are correct.");

//             localStorage.setItem("isAuth", true);

//             // Check if setIsAuth is a function before calling it
//             console.log("setIsAuth type:", typeof setIsAuth);
//             if (typeof setIsAuth === "function") {
//                 setIsAuth(true); // This should work if setIsAuth is correctly passed
//                 navigate("/write");
//             } else {
//                 console.error("setIsAuth is not a function:", setIsAuth);
//             }
//         } else {
//             console.log("Wrong credentials");
//             toast.error("Wrong credentials");
//         }
//     };

//     return (
//         <div className='login'>
//             <Toaster />
//             <span className="loginTitle">Login</span>
//             <form className="loginForm">
//                 <label>Username</label>
//                 <input className="loginInput" type="text" placeholder="Enter the username..."
//                     onChange={(event) => {
//                         setUsername(event.target.value)
//                     }}
//                 />
//                 <label>Password</label>
//                 <input className="loginInput" type="password" placeholder="Enter the password..."
//                     onChange={(event) => {
//                         setPassword(event.target.value)
//                     }} />
//                 <button className="loginButton" onClick={SignIn}>Login</button>
//             </form>
//         </div>
//     )
// }

// export default Login