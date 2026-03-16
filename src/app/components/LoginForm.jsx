"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }
    alert(`Email: ${email}\nPassword: ${password}`);
  }

  return (
    <div>
      <h2>Login Form</h2>
      <div style={{ marginBottom: "10px"}}>
        <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: "10px"}}
        />
        <input 
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}