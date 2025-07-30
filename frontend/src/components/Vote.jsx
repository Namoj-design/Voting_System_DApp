import React, { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../constants/contract";

const Vote = () => {
  const [selectedParty, setSelectedParty] = useState("");
  const [status, setStatus] = useState("");

  const handleVote = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask not found");
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const voteContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      const tx = await voteContract.vote(selectedParty); // assuming vote(string partyName)
      await tx.wait();

      setStatus("✅ Voted successfully!");
    } catch (err) {
      console.error(err);
      setStatus("❌ Voting failed!");
    }
  };

  return (
    <div>
      <h2>Cast Your Vote</h2>
      <select onChange={(e) => setSelectedParty(e.target.value)}>
        <option value="">Select Party</option>
        <option value="PartyA">Party A</option>
        <option value="PartyB">Party B</option>
        <option value="PartyC">Party C</option>
      </select>
      <button onClick={handleVote}>Vote with MetaMask</button>
      <p>{status}</p>
    </div>
  );
};

export default Vote;
