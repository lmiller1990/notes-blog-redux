import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPost} from '../store/actions'

class PostContainer extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log(`Loading ${this.props.match.params._id}`)
		this.props.getPost(this.props.match.params._id)

	}

	render() {
		return(
			<div>
				Post!!!
			</div>
		)
	}
}

export default connect(undefined, { getPost })(PostContainer)
