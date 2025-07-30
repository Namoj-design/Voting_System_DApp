import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import VotingABI from "../abis/Voting.json"; // Replace with your actual ABI

const contractAddress = "YOUR_CONTRACT_ADDRESS";

const Results = () => {
  const [votes, setVotes] = useState([]);

  const fetchVotes = async () => {
    try {
      if (!window.ethereum) return alert("Install MetaMask");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, VotingABI.abi, provider);

      const [addresses, parties] = await contract.getAllVotes();

      const formattedVotes = addresses.map((addr, index) => ({
        voter: addr,
        party: parties[index],
      }));

      setVotes(formattedVotes);
    } catch (error) {
      console.error("Error fetching votes:", error);
    }
  };

  useEffect(() => {
    fetchVotes();
  }, []);

  return (
    <div>
      <h2>Voting Results</h2>
      <table>
        <thead>
          <tr>
            <th>Voter Address</th>
            <th>Voted Party</th>
          </tr>
        </thead>
        <tbody>
          {votes.map((vote, idx) => (
            <tr key={idx}>
              <td>{vote.voter}</td>
              <td>{vote.party}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
