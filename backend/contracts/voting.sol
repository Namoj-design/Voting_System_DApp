pragma solidity ^0.8.0;

contract Voting {
    address public owner;
    mapping(string => uint256) public votes;
    mapping(address => bool) public hasVoted;
    string[] public parties;

    constructor(string[] memory _parties) {
        owner = msg.sender;
        parties = _parties;
    }

    function vote(string memory _party) public {
        require(!hasVoted[msg.sender], "You have already voted");
        bool valid = false;

        for (uint i = 0; i < parties.length; i++) {
            if (keccak256(bytes(parties[i])) == keccak256(bytes(_party))) {
                valid = true;
                break;
            }
        }

        require(valid, "Invalid party name");
        votes[_party]++;
        hasVoted[msg.sender] = true;
    }

    function getVotes(string memory _party) public view returns (uint256) {
        return votes[_party];
    }

    function getParties() public view returns (string[] memory) {
        return parties;
    }
}

}
