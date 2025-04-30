import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const SignInForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const users = localStorage.getItem("users");
    if (!users) {
      const defaultUsers = [
        { name: "sathish", phone: "1234567890" },
        { name: "sonu", phone: "0987654321" },
        { name: "Akhila", phone: "1112233445" },
      ];
      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
  }, []);
  const handleSignIn = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setMessage("Please enter both name and phone number.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setMessage("Phone number must be 10 digits.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users"));
    const foundUser = users.find(
      (user) => user.name === name && user.phone === phone
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      navigate("/home");
    } else {
      setMessage("Invalid credentials. Please try again.");
    }
  };
  return (
    <div className="form-container">
      <h2>Sign In</h2>

      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className={name ? "filled" : ""}>Name</label>
        </div>

        <div className="form-group">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label className={phone ? "filled" : ""}>Phone Number</label>
        </div>

        <button type="submit">Sign In</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default SignInForm;
