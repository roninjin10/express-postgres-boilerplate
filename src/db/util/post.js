import Post from '../post.js'

export const getAllPosts = () => Post.findAll({
  include: [{all: true}]
});

export const getPostByType = (type) => Post.findAll({
  where: {type}
});

export const createNewPost = (userid, title, body, type, postref) => Post.create({
  userid,
  title,
  body,
  type,
  postref
});

export const getPostById = (postId) => Post.findById(postId);