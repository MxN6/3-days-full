const express = require('express');
const fetch = require('node-fetch');
const path = require('path'); // Import the 'path' module
const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));  // Assume 'public' folder holds your frontend files

// Parse incoming JSON data
app.use(express.json());

// Serve the index.html when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Serve your index.html file
});

// Handle the Hugging Face AI response route
// app.post('/api/get-ai-response', async (req, res) => {
//     const userInput = req.body.inputs;

//     try {
//         const response = await fetch('https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B', {
//             headers: {
//                 Authorization: "Bearer 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",
//                 'Content-Type': 'application/json',
//             },
//             method: 'POST',
//             body: JSON.stringify({ inputs: userInput }),
//         });

//         const result = await response.json();
//         res.json(result);  // Send the result back to the frontend
//     } catch (error) {
//         console.error('Error fetching AI response:', error);
//         res.status(500).send('Error fetching AI response');
//     }
// });

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
