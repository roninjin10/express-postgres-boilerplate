import Post from '../post.js'

export const getAllPosts = () => Post.findAll({
  include: [{all: true}]
});

export const getPostByType = (type) => Post.findAll({
  where: {type}
});

export const createNewPost = (title, body, type) => Post.create({
  title,
  body,
  type
});


