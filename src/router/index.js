import { Router } from 'express'

import user from '../controller/user';
import questions from '../controller/questions';
import answers from '../controller/answers';

const router = Router();

router.get('/', (req, res) => res.json('Brandon Can\'t hang'));

// user routes
router.post('/user/sign-up', user.post.signup);
router.post('/user/sign-in', user.post.signin);
router.get('/user/:id', user.get.user);

// questions
router.get('/questions', questions.get.questions);
router.get('/questions/:qid', questions.get.question);
router.post('/questions', questions.post.question);

// answers
router.get('/answers', answers.get.answers);
router.get('/answers/:qid', answers.get.answer);
router.post('/answers', answers.post.answer);

export default router

