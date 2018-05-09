import { getAllPosts, getPostsByType, createNewPost, getPostById } from '../db/util/post'

const TYPE = 'Question';

let question = {
  get: {},
  post: {},
  patch: {}
};

question.get.questions = (req, res) => 
  getPostsByType(TYPE)
  .then((posts) => res.json(posts));


question.get.question = (req, res) => 
  getPostById(req.params.qid)
  .then((post) => res.json(post));


question.post.question = (req, res) => {
  const { userid, title, body, type, postref } = req.body;
  
  createNewPost(userid, title, body, type, postref)
  .then(() => res.status(201).send('post successful'))
  .catch((err) => res.status(401).json({
      message: 'there was an error posting question',
      err
  }));
}

// TODO controller.patch.question
// TODO refactor into posts that can be used for all 3

export default question