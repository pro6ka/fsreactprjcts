import express from 'express';
const app = express();
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';
import './db.js';
// const sharks = require('./routes/sharks');
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import winston from 'winston';

import userRoutes from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';

const consoleTransport = new winston.transports.Console();
const winstonOptions = {
    transports: [consoleTransport]
};
const logger = new winston.createLogger(winstonOptions);

import config from './config/config.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const viewPath = __dirname + '/views/';
const port = process.env.PORT || 8080;

// app.set("view engine", "html");
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(express.static(viewPath));

app.use('/', userRoutes);
// app.use('/sharks', sharks);

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            'error': `${err.name}: ${err.message}`
        });
    } else if (err) {
        res.status(400).json({
            'error': `${err.name}: ${err.message}`
        });
        logger.error(err);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

