import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [did, setDid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (did.trim() !== "") {
      onLogin(did.trim());
    }
  };

  return (
    <div className="login-container">
      <h2>Indian Election Voting System</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Digital ID (DID)"
          value={did}
          onChange={(e) => setDid(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
