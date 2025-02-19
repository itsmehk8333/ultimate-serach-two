const express = require('express');
const mongoose = require('mongoose');
const user = require('../schemas/users.schema');

const router = express.Router();


router.post('/register', async (req, res) => {
    const { name, email, address, pincode, phoneNumber, password, city, state, country, role } = req.body;
    const newUser = new user({
        name,
        email,
        address,
        pincode,
        phoneNumber,
        password,
        city,
        state,
        country,
        role
    });
    console.log(newUser);
    await newUser.save();
    res.send('User registered successfully');
});

router.post('/register-bulk', async (req, res) => {
    const users = req.body;
    await user.insertMany(users);
    res.send('Users registered successfully');
});


router.get("/search", async (req, res) => {
    db.users.find({ $text: { $search: "John" } })

});

router.get('/get-all-users', async (req, res) => {
    const users = await user.find();
    res.send(users);
});

module.exports = router;