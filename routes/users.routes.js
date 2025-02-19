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
    const { query } = req.query;
    const users = await user.find(
        {
            $or: [
                { name: { $regex: `^${query}`, $options: 'i' } },
                { email: { $regex: `^${query}`, $options: 'i' } },
                { address: { $regex: `^${query}`, $options: 'i' } },
                { city: { $regex: `^${query}`, $options: 'i' } },
                { state: { $regex: `^${query}`, $options: 'i' } },
                { country: { $regex: `^${query}`, $options: 'i' } }
            ]
        }
    ).limit(10);
    res.send(users);
    // const users = await user.find(
    //     { $text: { $search: query } },
    //     { score: { $meta: "textScore" } }
    // ).sort({ score: { $meta: "textScore" } }).limit(10);
    res.send(users);
});

router.get('/get-all-users', async (req, res) => {
    const users = await user.find();
    res.send(users);
});

module.exports = router;