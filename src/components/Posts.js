import React, {Component} from 'react'

const Posts = ({createPost, postPending, posts}) => 
	<div>
		Pending: {postPending.toString()}
		<button 
			onClick={() => createPost()}
		>
			Create
		</button>
	</div>

export default Posts
