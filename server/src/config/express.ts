import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import 'module-alias/register';
const morgan = require('morgan');

import application from '~/constants/application';
import * as errorHandler from '~/middlewares/apiErrorHandler';
import indexRoute from '~/routes/index.route';

const app = express();

require('dotenv').config();
app.use(bodyParser.json());

app.use(morgan('dev'));

// add cors

app.use(
  cors({
    credentials: false,
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    origin: '*',
  })
);

// Router
app.use(application.url.base, indexRoute);

// Error Handler
app.use(errorHandler.notFoundErrorHandler);

app.use(errorHandler.errorHandler);

export default app;
