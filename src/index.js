import {createStore, applyMiddleware} from 'redux'
import {apiMiddleware} from './store/middleware/api'
import rootReducer from './store/reducers'
import logger from 'redux-logger'
import {increment, createPost} from './store/actions'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import PostsContainer from './containers/PostsContainer'

const store = createStore(rootReducer, applyMiddleware(apiMiddleware, logger))

store.subscribe(() => console.log(store.getState()))

store.dispatch(increment(-8))

// store.dispatch(createPost())

ReactDOM.render(
	<Provider store={store}>
		<PostsContainer />
	</Provider>
	, document.getElementById('root'))
