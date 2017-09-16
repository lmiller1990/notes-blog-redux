import * as types from './action-types'

export const increment = (amount) => ({
	type: types.INCREMENT,
	payload: {
		amount
	}
})

export const createPost = () => ({
	type: types.API_POST,
	payload: {
		url: 'posts/create',
		data: {
			title: 'new post',
		},
		...types.CREATE_POST
	}
})

export const getPosts = () => ({
	type: types.API_GET,
	payload: {
		url: 'posts',
		...types.GET_POSTS
	}
})

export const selectPost = (_id) => ({
	type: types.SELECT_POST,
	payload: {
		_id
	}
})

export const getPost = (_id) => ({
	type: types.API_GET,
	payload: {
		query: _id,
		url: 'posts',
		...types.GET_POST
	}
})

export const updatePost = (post) => ({
	type: types.API_POST,
	payload: {
		query: post._id,
		data: post,
		url: 'posts',
		...types.UPDATE_POST
	}
})
