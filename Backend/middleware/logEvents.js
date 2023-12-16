const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const authController = require('../controllers/authController')
const logEvents = async (message, logName ) => {
    const dateTime = `${format(new Date(), 'dd-MM-yyyy\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
        }

        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
    } catch (err) {
        console.log(err);
    }
}

const logger = async (req, res, next) => {
    try {
        // const user = req.body ? req.body.user : 'unknown'; // Check if req.body exists before destructure
        const user=authController.name
        console.log("user:"+authController.name)
        const logMessage = `${req.method}\t${req.headers.origin}\t${user}`;
        
        logEvents(logMessage, 'reqLog.txt');
        // console.log(user);
        // console.log(`${req.method} ${req.path} ${username}`);
    } catch (error) {
        console.error(error);
        
    } finally {
        next();
    }
};

module.exports = { logger, logEvents };