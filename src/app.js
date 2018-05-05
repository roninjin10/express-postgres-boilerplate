import express from 'express'
import applyMiddleware from './middleware'
// import controller from './controller/questions'
import router from './router'

const app = express();

applyMiddleware(app);

app.use(router);

export default app;
