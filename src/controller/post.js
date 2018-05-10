import { getAllPosts, getPostsByType, createNewPost, getPostById } from '../db/util/post'

const PostTypeError = (expectedType, type) => 
  Error(`expected post of type ${expectedType} got a post of type ${type}`);

// may never get used
export const allPosts = (req, res) => 
  getAllPosts().then((posts) => res.json(posts));

export const postsByType =(postType) => (req, res) => 
  getPostsByType(postType)
  .then((posts) => res.json(posts));


export const postById = (postType) => (req, res) => 
  getPostById(req.params.qid)
  .then((post) => {
    if (post.type !== postType) {
      throw new PostTypeError(postType, post.type);
    }
    res.json(post)
  })


export const newPost  = (postType) => (req, res) => {
  const { userid, title, body, type, postref } = req.body;
  if (type !== type) {
    throw new PostTypeError(postType, type);
  }
  createNewPost(userid, title, body, type, postref)
  .then(() => res.status(201).send('post successful'))
  .catch((err) => res.status(401).json({
      message: 'there was an error posting question',
      err
  }));
}


export default post