import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { pick } from 'lodash';
import 'babel-polyfill';
import { apiRouter } from './routes';
import { mongoose, passport } from './core';
import { errorResponse } from './utils/response';
import env from './config/env';

const { PORT = 4002 } = env;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));

app.use(passport.initialize());

app.use('/api', apiRouter);

app.use((req, res, next) => res.status(404).send(`${ req.url } - Not Found`));

app.use((err, req, res, next) => {
    switch (err.name) {
        case 'ValidationError':
            return errorResponse(res, {
                name: err.name,
                status: 422,
                errors: values(err.errors).map(error => error.properties)
            }, false);
        default: {
            console.error(`${err.name}: `, err);
            return errorResponse(res, err, false);
        }
    }
});

app.listen(Number(PORT), err => {
    if (err) {
        console.error('Cannot run!', err);

        return process.exit(1);
    }

    console.log(`Listening on port ${ PORT }`);

    process.on('SIGINT', () => process.exit());

    mongoose.connection.once('open', () => console.log('MongoDB: Connection Succeeded.'));
    mongoose.connection.on('error', err => console.error(err));
});



