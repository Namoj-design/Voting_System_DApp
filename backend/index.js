// backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const votes = {}; // Example: { '0xUserAddress': 'Party Name' }

app.post('/vote', (req, res) => {
    const { publicKey, party } = req.body;

    if (!publicKey || !party) {
        return res.status(400).json({ message: 'Invalid vote submission' });
    }

    if (votes[publicKey]) {
        return res.status(400).json({ message: 'You have already voted!' });
    }

    votes[publicKey] = party;
    return res.status(200).json({ message: 'Vote submitted successfully!' });
});

app.get('/results', (req, res) => {
    const results = {};
    for (let key in votes) {
        const party = votes[key];
        results[party] = (results[party] || 0) + 1;
    }
    res.json(results);
});

app.listen(5000, () => {
    console.log('Backend running on http://localhost:5000');
});

