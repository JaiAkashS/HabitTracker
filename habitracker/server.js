const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 6969;


    
// Middleware to parse JSON data
app.use(bodyParser.json());

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
});

// Handle form submission
app.post('/submit-habit', (req, res) => {
    const habitData = req.body;

    // Read the existing data from the JSON file
    let habitList = [];
    const filePath = path.join(__dirname, 'habits.json');
    
    if (fs.existsSync(filePath)) {
        const jsonData = fs.readFileSync(filePath);
        habitList = JSON.parse(jsonData);
    }

    // Add new habit data to the list
    habitList.push(habitData);

    // Write the updated list back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(habitList, null, 2));

    res.send('Habit tracked successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
