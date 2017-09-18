import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getPosts} from '../store/actions'

class Sidebar extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.getPosts()	
	}

	render() {
		return(
			<div className="sidebar-container">
				<div className="header">Programming</div>
				<div className="indented-link">
					<Link to="/resume">Resume</Link>
				</div>

				<div className="indented-link">
					<Link to="/posts">Posts</Link>
				</div>

				<div className="indented-link">
					<Link to="/projects">Projects</Link>
				</div>

				<div className="header">Life</div>
				<div className="indented-link">
					<Link to="/goals">Manifesto</Link>
				</div>
			</div>
		)
	}
}

export default connect(undefined, { getPosts })(Sidebar)
