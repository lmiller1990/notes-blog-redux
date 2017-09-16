import React from 'react'

const Post = (props) =>  {
	return (
		<div onClick={() => props.selectPost(props.post._id)}>
			{props.post.title}
		</div>
	)
}

export default Post
