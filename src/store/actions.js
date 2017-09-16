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
