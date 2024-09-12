const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve HTML files from the root directory
app.use(express.static(path.join(__dirname))); // Serve static files from root

// Serve 'aboutme.html' as the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'aboutme.html')); // Serve aboutme.html instead of index.html
});

// Middleware to parse JSON data
app.use(express.json());

app.post('/sendForm', (req, res) => {
    // Your email sending logic here
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
