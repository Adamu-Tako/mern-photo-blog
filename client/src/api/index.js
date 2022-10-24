import axios from "axios";

const url = "https://my-memories-blog.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const editPost = (id, editedPost) =>
  axios.patch(`${url}/${id}`, editedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
