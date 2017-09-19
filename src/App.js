import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'

import PostContainer from './containers/PostContainer'
import Intro from './components/Intro'
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
				</div>
				<div className="right column">
					<Route path="/posts/:_id" component={PostContainer}/>
					<Route path="/projects" component={Projects} />
					<Route path="/manifesto" component={Manifesto} />
					<Route exact path="/posts" component={PostsList} />
					<Route path="/resume" component={Resume} />
					<Route exact path="/" component={Intro} />
				</div>
			</div>
		)
	}
}

export default App
