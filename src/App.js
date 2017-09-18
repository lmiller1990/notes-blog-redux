import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import PostContainer from './containers/PostContainer'
import PostsList from './containers/PostsList'
import Sidebar from './containers/Sidebar'
import Projects from './containers/Projects'
import Manifesto from './components/Manifesto'
import Resume from './components/Resume'

class App extends Component {
	render() {
		return (
			<div className="app main container">
				<div className="left column">
					<Route path="/" component={Sidebar}/>
					<Route path="/posts" component={PostsList} />
					<Route path="/projects" component={Projects} />
					<Route path="/manifesto" component={Manifesto} />
					<Route path="/resume" component={Resume} />
				</div>
				<div className="right column">
					<Route path="/posts/:_id" component={PostContainer}/>
				</div>
			</div>
		)
	}
}

export default App
