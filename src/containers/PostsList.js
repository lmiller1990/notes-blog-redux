import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {createPost, getPosts, selectPost} from '../store/actions'

class PostsList extends Component {
	render() {
		return (
			<div>
				<div className="header">Posts</div>
				{
					this.props.posts.map(post => 
						<div className="indented-link" key={post._id}>
							<Link 
								to={`/posts/${post._id}`}
								onClick={() => this.props.selectPost(post._id)}
							>
								{post.title}
							</Link>
						</div>
					)
				}
				<button 
					onClick={() => this.props.createPost()}>
					New Post
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps, { createPost, getPosts, selectPost })(PostsList)
