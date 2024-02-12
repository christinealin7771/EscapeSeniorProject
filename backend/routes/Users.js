const express = require('express')
const router = express.Router()
const Users = require('../models/Users')

router.post('/addUser', (req, res) => {
    // Check if we want the username to be case sensitive
    Users.findOne({username: req.body.username})
    .then(async(result) => {
        if (result !== null){
            res.status(409).send({ error: "Username already used" });
        }
        else {
            const newUser = new Users({
                username: req.body.username,
                escapeTime: "0"
            })

            await newUser.save()
            .then((result) => {
                res.status(201).send({
                    message: "User Created Successfully",
                    result,
                });
            })

        }
    })
    .catch((error) => {
        res.status(500).send({
            message: "Error creating user",
            error,
        });
    });
});

router.get("/finduser", async (req, res) => {
    var username = req.body.username
    Users.findOne({ username: username })
    .then((response) => {
        // return success response
        res.status(200).send({
            message: "User found",
            username: req.body.username,
            escapeTime: response.escapeTime
        });
    })
    .catch((e) => {
        res.status(404).send({
            message: "User not found",
        });

    })
})

module.exports = router