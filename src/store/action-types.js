const asyncActionType = (type) => ({
	PENDING: `${type}_PENDING`,
	SUCCESS: `${type}_SUCCESS`,
	FAILURE: `${type}_FAILURE`
})

export const API_GET = 'API_GET'
export const API_POST = 'API_POST'

export const INCREMENT = 'INCREMENT'
export const ADD_POST = 'ADD_POST'

export const CREATE_POST = asyncActionType('CREATE_POST')
export const GET_POSTS = asyncActionType('GET_POSTS')
export const GET_POST = asyncActionType('GET_POST')
export const UPDATE_POST = asyncActionType('UPDATE_POST')
export const LOGIN = asyncActionType('LOGIN')
export const LOGOUT = asyncActionType('LOGOUT')
export const SELECT_POST = 'SELECT_POST'
