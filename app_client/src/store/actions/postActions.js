import axios from 'axios';

import * as actions from './index';

export const getPosts = () => async dispatch => {
    const res = await axios.get('/api/posts');
    dispatch({ type: actions.GET_POSTS, posts: res.data})
}

export const getPost = (id) => async dispatch => {
    const res = await axios.get(`/api/posts/${id}`);
    dispatch({ type: actions.GET_POST, post: res.data})
}

export const getImg = (path) => async dispatch => {
    const res = await axios.get(`/static/${path}`);
    dispatch({ type: actions.GET_IMG, image: res.data})
}

export const addPost = (post, history) => async dispatch => {
    const res = await axios.post('/api/posts', post);
    dispatch({ type: actions.ADD_POST });
    history.push('/');
}

export const deletePost = (id, history) => async dispatch => {
    const res = await axios.delete(`/api/posts/${id}`);
    dispatch({ type: actions.DELETE_POST });
    history.push('/');
}

export const updatePost = (id, post, history) => async dispatch => {
    await axios.put(`/api/posts/${id}`, post);
    dispatch({ type: actions.UPDATE_POST });
    history.push(`/post/${id}`);
}

