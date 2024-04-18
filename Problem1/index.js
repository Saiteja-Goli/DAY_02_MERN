const axios = require('axios');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 9000;

async function fetchUserData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        throw error;
    }
}

app.get("/", async (req, res) => {
    try {
        const userData = await fetchUserData();
        res.json(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
