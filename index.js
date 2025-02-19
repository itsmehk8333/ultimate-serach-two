const express = require('express');
const mongoose = require('mongoose');
const fakeDataRoute = require('./fakeData');
const cors = require('cors');
const { configDotenv } = require('dotenv');

const app = express();
configDotenv.apply();
//mongodb+srv://harigunnala01:0fqNpi2TJHcgxJUH@cluster0.jo00b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// Connect to MongoDB
const db_url = process.env.MONGODB_URI;
mongoose.connect(db_url)
    .then(() => console.log('Connected to MongoDB...'))

    .catch(err => console.error('Could not connect to MongoDB...'));

// Middleware
app.use(express.json());
app.use(cors());
app.use("/users", require('./routes/users.routes'));
// app.use('/fakeData', fakeDataRoute);
app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
})