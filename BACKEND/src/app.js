const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
dotenv.config();

const connectDB = require('../config/connectDB');

const app = express();
`   `
// Enable CORS middleware
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
connectDB();


app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use(express.json());

app.use('/api', require('../routes/router'));

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
