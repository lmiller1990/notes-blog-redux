import React, {Component} from 'react'
import {connect} from 'react-redux'

import {createPost, getPosts, selectPost} from '../store/actions'
import Posts from '../components/Posts'

class PostsContainer extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.getPosts()	
		console.log('nav', this.props)
	}

	render() {
		return(
			<Posts 
				createPost={this.props.createPost} 
				postPending={this.props.postPending}
				posts={this.props.posts}
				selectPost={this.props.selectPost}
			/>
		)
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts,
		postPending: state.ui.postPending
	}
}

export default connect(mapStateToProps, { createPost, getPosts, selectPost })(PostsContainer)
