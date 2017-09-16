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

export const ui = (state = { postPending: false }, action) => {
	switch (action.type) {
		case types.CREATE_POST.PENDING: 
			return {...state, postPending: true}
		case types.CREATE_POST.SUCCESS: 
			return {...state, postPending: false}
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
		default:
			return state
	}
}

export default combineReducers({
	posts, counter, ui
})
