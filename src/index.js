import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'

import {increment, createPost} from './store/actions'
import React from 'react'
import {apiMiddleware} from './store/middleware/api'
import rootReducer from './store/reducers'
import App from './App'

const store = createStore(rootReducer, applyMiddleware(apiMiddleware, logger))

store.subscribe(() => console.log(store.getState()))

store.dispatch(increment(-8))

// store.dispatch(createPost())

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>
	, document.getElementById('root'))
