const winston =require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');

const allowedTransports=[];

//defining the logger on the console by using transport
//transport is the place where you log -->console,DB,file


//below transport configuration enables logging on the console
allowedTransports.push(new winston.transports.Console({

    //setting different format for the console to 
    format:winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log)=>`${log.timestamp} [${log.level}]:${log.message}`)
    )
}));

//for the log save into mongoDB
allowedTransports.push(new winston.transports.MongoDB({
    level:'error',//sirf error log will be dumped into db
    db:LOG_DB_URL,
    collection:'logs'
}));

//for the log save into file
allowedTransports.push(new winston.transports.File({
    filename:`app.log`
}))

const logger=winston.createLogger({
    //default formatting setup
    format:winston.format.combine(
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log)=>`${log.timestamp} [${log.level}]:${log.message}`)
    ),
    //allowed transport is an array uske andar tum define kr skte ho ki tum kon sa log use krna chahte ho
    transports:allowedTransports
});

module.exports=logger;