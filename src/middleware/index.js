import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import localPassport from './localPassport'
import morgan from './morgan'
import session from './session'

const applyMiddleware = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(morgan);
  app.use(cookieParser());
  app.use(session);
  app.use(localPassport.initialize());
  app.use(localPassport.session());

  return app;
};

export default applyMiddleware;