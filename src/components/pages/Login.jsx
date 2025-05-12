import React, { useState } from 'react';
// import "./Login.css";
import user_icon from "../../assets/user_icon.png";
import email_icon from "../../assets/email_icon.png";
import password_icon from "../../assets/password_icon.png";
import logo from "../../assets/logo.png";


const Login = () => {
    const [action, setAction] = useState("Login");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);

    const validateForm = () => {
        const errors = {};
        if (action === "Signup") {
            if (!name) errors.name = "Name is required";
        }
        if (!email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is not valid";
        }
        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }
        if (action === "Signup") {
            if (!confirmPassword) {
                errors.confirmPassword = "Confirm Password is required";
            } else if (confirmPassword !== password) {
                errors.confirmPassword = "Passwords do not match";
            }
        }
        return errors;
    };

    // Handle form submission
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Form Submitted successfully!");
        }
    };

    return (
        <div className="container">
            <div className="main-header">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="logo">
                    <img src={logo} alt="" id="logo" />
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    {action === "Signup" && (
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <div className="error">{errors.name}</div>}
                        </div>
                    )}

                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>

                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder={action === "Login" ? "Password" : "New Password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="toggle-password"
                        >
                            {passwordVisible ? "Hide" : "Show"}
                        </span>
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>

                    {action === "Signup" && (
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {errors.confirmPassword && (
                                <div className="error">{errors.confirmPassword}</div>
                            )}
                        </div>
                    )}
                </div>

                <div className="submit-container">
                    {/* Show the opposite button and make it shaded or disabled */}
                    {action === "Login" && (
                        <button
                            type="button"
                            className="submit gray"
                            onClick={() => setAction("Signup")}
                        >
                            Sign Up
                        </button>
                    )}
                    {action === "Signup" && (
                        <button
                            type="button"
                            className="submit gray"
                            onClick={() => setAction("Login")}
                        >
                            Login
                        </button>
                    )}

                    {/* Show the submit button according to the action */}
                    <button type="submit" className="submit">
                        {action === "Login" ? "Login" : "Signup"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
