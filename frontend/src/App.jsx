import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Vote from "./components/Vote";
import Results from "./components/Results";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Header */}
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600"> Web3 Voting System</h1>
          <nav className="space-x-4">
            <Link to="/vote" className="hover:underline">Vote</Link>
            <Link to="/results" className="hover:underline">Results</Link>
          </nav>
        </header>

        {/* Body */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="text-center py-4 text-sm text-gray-500">
           {new Date().getFullYear()} DecentralVote | Powered by Namoj
        </footer>
      </div>
    </Router>
  );
}

export default App;
