const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

let name="unknown";
// const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();

// // Use Morgan for logging
// app.use(morgan('combined'));
// // Set up the views directory
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.get('/AdminLogin', (req, res) => {
//     res.render('AdminLogin');
//   });

// // Middleware for parsing POST request data
// app.use(bodyParser.urlencoded({ extended: true }));

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    const foundUser = await User.findOne({ username: user }).exec();
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.password);
    
    if (match) {
        fs.appendFileSync('log.txt', `Login successful for user: ${user}`);
        // console.log(user)
        const roles = Object.values(foundUser.roles).filter(Boolean);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30000s' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        // Saving refreshToken with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);
        console.log(roles);

        name=user;
        console.log("--"+name)
        
        // fs.appendFileSync('reqLog.txt', `Login successful for user: ${user}`);

        // Creates Secure Cookie with refresh token
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 }); // 

        // Send authorization roles and access token to user
        res.json({ roles, accessToken });

    } else {
        res.sendStatus(401);
    }
}


module.exports = { handleLogin, name};