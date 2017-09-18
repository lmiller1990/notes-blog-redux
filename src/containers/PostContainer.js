import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPost, updatePost} from '../store/actions'
import '../styles.css'

class PostContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			content: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		this.props.getPost(this.props.match.params._id)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ 
			title: nextProps.post.title, 
			content: nextProps.post.content
		})
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit() {
		this.props.updatePost({...this.props.post, title: this.state.title, content: this.state.content})
	}

	render() {
		return(
			<div>
				{ this.props.post
					?
					<div>
						Title: {this.props.post.title}
						<input 
							type="text" 
							name="title"
							value={this.state.title} 
							onChange={this.handleChange} />

						<input 
							type="text" 
							name="content"
							value={this.state.content} 
							onChange={this.handleChange} />

						<button onClick={this.handleSubmit}>Update</button>
					</div>
					:
					<div>
						Loading post...
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const _post = state.posts.filter(p => p._id === ownProps.match.params._id)
	return {
		post: _post.length > 0 ? _post[0] : null
	}
}

export default connect(mapStateToProps, { getPost, updatePost })(PostContainer)
