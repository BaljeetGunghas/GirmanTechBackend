const express = require('express');
const cors = require('cors');
const user = require('./Routes/user');
const connectDB = require('./db');
const PORT = 8080;

// Middleware
const app = express();
app.use(express.json());  // Use express.json() only, no need for body-parser
app.use(cors());

// Database connection
console.log('hey');

const handleConnectdb = async () => {
    await connectDB();
}
handleConnectdb();

// Routes

app.get('/', (req, res) => {
    return res.json("App Started")
})
app.use('/data', user);


// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
