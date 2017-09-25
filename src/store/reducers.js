import * as types from './action-types'
import {combineReducers} from 'redux'

export const counter = (state = 0, action) => {
	switch (action.type) {
		case types.INCREMENT:
			const updated = state += action.payload.amount
			return updated
		default: 
			return state
	}	
}

export const ui = (state = { createPostPending: false }, action) => {
	switch (action.type) {
		case types.CREATE_POST.PENDING: 
			return {...state, createPostPending: true}
		case types.CREATE_POST.SUCCESS: 
			return {...state, createPostPending: false}
		default:
			return state
	}
}

export const posts = (state = [], action) => {
	switch (action.type) {
		case types.GET_POSTS.SUCCESS:
			return action.payload
		case types.CREATE_POST.SUCCESS:
			return [...state, action.payload]
		case types.UPDATE_POST.SUCCESS:
		case types.GET_POST.SUCCESS:
			return state.map(post => 
				post._id !== action.payload._id
				? post
				: action.payload
			)
		case types.SELECT_POST:
			return state.map(post => 
				post._id !== action.payload._id
				? {...post, isSelected: false}
				: {...post, isSelected: true}
			)
		default:
			return state
	}
}

export const auth = (state = { authenticated: false }, action) => {
	switch (action.type) {
		case types.LOGIN.SUCCESS:
			return { authenticated : true }
		case types.LOGIN.FAILURE:
			return { authenticated: false }
		case types.LOGIN.PENDING:
			return { authenticated: false }
		case types.LOGOUT.SUCCESS:
			return { authenticated: false }
		default: 
			return state
	}
}

export default combineReducers({
	posts, counter, ui, auth
})
