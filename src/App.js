import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import PostContainer from './containers/PostContainer'
import PostsList from './containers/PostsList'
import Sidebar from './containers/Sidebar'

class App extends Component {

	render() {
		return (
			<div className="app main container">
				<div className="left column">
					<Route path="/" component={Sidebar}/>
					<Route path="/posts" component={PostsList} />
				</div>
				<div className="right column">
					<Route path="/posts/:_id" component={PostContainer}/>
				</div>
			</div>
		)
	}
}

export default App
