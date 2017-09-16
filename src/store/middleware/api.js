import axios from 'axios'
import * as types from '../action-types'

const BASE_URL = 'http://localhost:3002/'

const appendQuery = (query) => query ? `/${query}` : '' 

export const apiMiddleware = ({dispatch}) => next => action => {
	if (action.type !== types.API_POST && action.type !== types.API_GET) {
		return next(action)
	}

	const {payload} = action

	dispatch({type: payload.PENDING})

	if (action.type === types.API_GET) {
		console.log('params', payload.params)
		axios.get(BASE_URL + payload.url + appendQuery(payload.query)) 
			.then(response => {
				dispatch({ type: payload.SUCCESS, payload: response.data })
			})
			.catch(error => {
				dispatch({ type: payload.FAILURE })
			})
	}

	if (action.type === types.API_POST) {
		axios.post(BASE_URL + payload.url + appendQuery(payload.query), {
			data: payload.data
		}) 
			.then(response => {
				dispatch({ type: payload.SUCCESS, payload: response.data })
			})
			.catch(error => {
				dispatch({ type: payload.FAILURE })
			})
	}
}
