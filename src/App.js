import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import PostContainer from './containers/PostContainer'
import Sidebar from './containers/Sidebar'

class App extends Component {

	render() {
		return (
			<div>
				<Route exact path="/posts/:_id" component={PostContainer}/>
				<Route path="/" component={Sidebar}/>
			</div>
		)
	}
}

export default App
