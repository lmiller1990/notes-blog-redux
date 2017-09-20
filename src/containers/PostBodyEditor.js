import React, {Component} from 'react'
import {Editor, EditorState, ContentState} from 'draft-js'
import {CodeUtils} from 'draft-js-code'

class PostBodyEditor extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Editor 
					editorState={this.props.editorState}
					onChange={this.props.onChange}
				/>
			</div>
		)
	}
}

export default PostBodyEditor
