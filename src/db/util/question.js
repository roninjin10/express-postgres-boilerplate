import { postsByType, postById, newPost } from './post'

let get = {};
let post = {};

const TYPE = 'Question';

get.all = postsByType(TYPE);

get.byId = postById(TYPE);

post.save = newPost(TYPE);

export default {get, post}