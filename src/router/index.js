import { Router } from 'express'

import questionsRouter from './questions'
import answersRouter from './answers'
//import controller from '../controller'

const router = Router();

router.get('/', (req, res) => res.json(req.query));
router.post('/sign-up', (req, res) => res.json(2));
router.post('/sign-in', (req, res) => res.json(3));
//TODO router.get('/user/', (req, res) => res.json(4));


router.get('/questions', questionsRouter);
router.get('/answers', answersRouter);

//TODO router.post('/comments', (req, res) => res.json(req.path));

router.post('/sign-out', (req, res) => res.json(req.path));


export default router

