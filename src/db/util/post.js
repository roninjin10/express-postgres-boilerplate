import db from '../models'

const Post = db.Post;

export const getAllPosts = () => Post.findAll({
  include: [{all: true}]
});

export const getPostsByType = (type) => Post.findAll({
  where: {type}
});

export const getPostsByQuery = (query) => Post.findAll({
  where: query
});

export const createNewPost = (userid, title, body, type, postref) => Post.create({
  userid,
  title,
  body,
  type,
  postRefId: postref
});

export const getPostById = (postId) => Post.findById(postId);

console.log('post', Post);
createNewPost(1, 'this is a title', 'this ias a body', 'Question', 2);