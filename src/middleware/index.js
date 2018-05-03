import morgan from './morgan'

const applyMiddleware = (app) => {
  app.use(morgan);

  return app;
};

export default applyMiddleware;