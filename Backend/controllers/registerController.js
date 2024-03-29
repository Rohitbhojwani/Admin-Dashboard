const User = require('../model/User');
const bcrypt = require('bcrypt');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
var fs = require('fs')
const http = require("http")
const app = express();

const handleNewUser = async (req, res) => {
    const { user, roles, pwd, companyname, nameofmanufacturer, addressofcompany, emailid,retid } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);

        //create and store the new user
        const result = await User.create({
            "username": user,
            "roles": roles,
            "password": hashedPwd,
            "companyname": companyname,
            "nameofmanufacturer": nameofmanufacturer,
            "addressofcompany": addressofcompany,
            "emailid": emailid,
            "retid": retid,
        });

        console.log(result);
        fs.appendFileSync('log.txt', `Registration successful for user: ${user}`);

        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };