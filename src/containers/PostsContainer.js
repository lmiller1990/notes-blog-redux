import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createPost, getPosts} from '../store/actions'
import Posts from '../components/Posts'

class PostsContainer extends Component {
	componentDidMount() {
		this.props.getPosts()	
	}

	render() {
		return(
			<Posts 
				createPost={this.props.createPost} 
				postPending={this.props.postPending}
				getPosts={this.props.getPosts}
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

export default connect(mapStateToProps, { createPost, getPosts })(PostsContainer)
