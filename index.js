const express = require('express');
const mongoose = require('mongoose');
const fakeDataRoute = require('./fakeData');
const cors = require('cors');

const app = express();
//mongodb+srv://harigunnala01:0fqNpi2TJHcgxJUH@cluster0.jo00b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// Connect to MongoDB
mongoose.connect("mongodb+srv://harigunnala01:0fqNpi2TJHcgxJUH@cluster0.jo00b.mongodb.net/search-engine?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('Connected to MongoDB...'))

    .catch(err => console.error('Could not connect to MongoDB...'));

// Middleware
app.use(express.json());
app.use(cors());
app.use("/users", require('./routes/users.routes'));
app.use('/fakeData', fakeDataRoute);
app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
})