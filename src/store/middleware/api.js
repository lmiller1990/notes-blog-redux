import axios from 'axios'
import * as types from '../action-types'

const PORT = process.env.PORT || 3002
const BASE_URL = process.env.NODE_ENV === 'production'
? `/`
: `http://localhost:${PORT}/`

const appendQuery = (query) => query ? `/${query}` : '' 

export const apiMiddleware = ({dispatch}) => next => action => {
	if (action.type !== types.API_POST && action.type !== types.API_GET) {
		return next(action)
	}

	const {payload} = action
	console.log('BASE_URL:', BASE_URL)

	dispatch({type: payload.PENDING})

	if (action.type === types.API_GET) {
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
