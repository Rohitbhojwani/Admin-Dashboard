require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const fs = require('fs'); 
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();
//app.use(cors())
// custom middleware logger
// app.use(logger);
// app.use(morgan('common'));
// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), { flags: 'a' })

morgan.token('username', (req) => {
    const name=JSON.stringify(req.body)
    // console.log("body"+name)
    return req.body ?req.body.user : 'unknown';
});


// const logFormat = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" ":username"';

// Use morgan middleware with the custom log format
// app.use(morgan(logFormat));
app.use(morgan('common' , { stream: accessLogStream }));
  
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

app.use('/userRequest',require('./routes/request'));

app.use('/pending', require('./routes/display_pending'))

app.use(verifyJWT);
app.use('/employees', require('./routes/api/employees'));
app.use('/users', require('./routes/api/users')); 
//app.use('/request')

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});