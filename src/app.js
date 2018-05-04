import express from 'express'
import applyMiddleware from './middleware'
import controller from './controller'

const app = express();

applyMiddleware(app);

app.use(controller);

export default app;
