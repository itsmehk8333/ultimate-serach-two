// const users = require("./schemas/users.schema");
// const { faker } = require('@faker-js/faker');
// const express = require('express');

// const router = express.Router();

// router.post('/register-bulk', async (req, res) => {
//     const generateFakeData = async (numberRecords) => {

//         const userRecords = [];

//         for (let i = 0; i < numberRecords; i++) {
//             const user = {
//                 name: faker.person.fullName(), // Generates a random name
//                 email: faker.internet.email(), // Generates a random email
//                 address: faker.location.streetAddress(), // Generates a random street address
//                 pincode: faker.location.zipCode(), // Generates a random zip code (string to match the schema)
//                 phoneNumber: faker.phone.number(), // Generates a random phone number (string to match the schema)
//                 password: faker.internet.password(), // Generates a random password
//                 city: faker.location.city(), // Generates a random city
//                 state: faker.location.state(), // Generates a random state
//                 country: faker.location.country(), // Generates a random country
//                 role: faker.person.jobTitle() // Generates a random job title (role)
//             };
//             userRecords.push(user);
//         }
//         return userRecords;
//     }

//     const numUsersToGenerate = 50000; // Adjust number of users to generate
//     const userData = await generateFakeData(numUsersToGenerate); // Await the data generation

//     try {
//         await users.insertMany(userData); // Bulk insert users into the database
//         res.send('Users registered successfully');
//     } catch (error) {
//         res.status(500).send('Error registering users: ' + error.message);
//     }
// });

// module.exports = router;
