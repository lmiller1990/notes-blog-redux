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
			<div>
				Sidebar
				<Link to="/posts">Posts</Link>
			</div>
		)
	}
}

export default connect(undefined, { getPosts })(Sidebar)
