// app.js
const express = require('express');
const app = express();
const port = 3000;

// Route GET
app.get('/', (req, res) => {
    res.send('Hello, ini halaman HOME dengan method GET');
});

// Middleware untuk parsing body request
app.use(express.json());

// Route POST
app.post('/submit', (req, res) => {
    const { name } = req.body;
    res.send(`Hello, ${name}!`);
});

app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}/`);
});
