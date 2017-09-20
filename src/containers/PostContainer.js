import React, {Component} from 'react'
import {connect} from 'react-redux'
import PrismDraftDecorator from 'draft-js-prism'
import DraftHighlightExample from './DraftHighlightExample'
import {Editor, EditorState, ContentState, Decorator, convertFromRaw} from 'draft-js'
import {getPost, updatePost} from '../store/actions'
import PostBodyEditor from './PostBodyEditor'
import '../styles.css'
import '../prism-coy.css'

class PostContainer extends Component {
	constructor(props) {
		super(props)

		const decorator = new PrismDraftDecorator()

		const contentState = convertFromRaw({
			entityMap: {},
			blocks: [
				{ type: 'code-block', text: 'var msg = "this is awesome"' }
			]
		}) 

		this.state = {
			title: '',
			editorState: EditorState.createEmpty(),
			codeEditorState: EditorState.createWithContent(contentState, decorator)
		}

		this.handleChange = this.handleChange.bind(this)
		this.onChange = this.onChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		this.props.getPost(this.props.match.params._id)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ 
			title: nextProps.post.title, 
			content: nextProps.post.content,
			editorState: EditorState.createWithContent(
				ContentState.createFromText(nextProps.post.content)
			)
		})
	}

	onChange(editorState) {
		this.setState({editorState})
	} 

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit() {
		this.props.updatePost({...this.props.post, 
			title: this.state.title, 
			content: this.state.editorState.getCurrentContent().getPlainText()
		})
	}

	render() {
		return(
			<div>
				{ this.props.post
					?
					<div>
						<DraftHighlightExample />
						<input 
							style={{ width: '250px' }}
							type="text" 
							name="title"
							value={this.state.title} 
							onChange={this.handleChange} />

						<button 
							style={{float: 'right'}}
							onClick={this.handleSubmit}>Update</button>
						<PostBodyEditor 
							onChange={this.onChange}
							editorState={this.state.editorState} />
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
