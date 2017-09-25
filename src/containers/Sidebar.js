import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getPosts} from '../store/actions'

class Sidebar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const showPosts = this.props.authenticated 
		? (
				<div className="indented-link">
					<Link to="/posts">Notes</Link>
				</div>
			)
		: null

		return(
			<div className="sidebar-container">
				<div className="header">Programming</div>

				<div className="indented-link">
					<Link to="/">Home</Link>
				</div>

				<div className="indented-link">
					<Link to="/resume">Resume</Link>
				</div>

				{showPosts}

				<div className="indented-link">
					<Link to="/projects">Projects</Link>
				</div>

				<div className="header">Life</div>
				<div className="indented-link">
					<Link to="/manifesto">Manifesto</Link>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	authenticated: state.auth.authenticated
})

export default connect(mapStateToProps, {})(Sidebar)
