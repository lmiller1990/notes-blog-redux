import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {createPost, getPosts, selectPost} from '../store/actions'

class PostsList extends Component {
	render() {
		return (

			<div className="posts container">
				Pending: {this.props.createPostPending.toString()}
				<button 
					onClick={() => this.props.createPost()}>
					Create
				</button>
				{
					this.props.posts.map(post => 
						<div key={post._id}>
							<Link 
								to={`/posts/${post._id}`}
								onClick={() => this.props.selectPost(post._id)}
							>
								{post.title}
							</Link>
						</div>
					)
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts,
		createPostPending: state.ui.createPostPending
	}
}

export default connect(mapStateToProps, { createPost, getPosts, selectPost })(PostsList)
