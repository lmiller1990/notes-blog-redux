import React, {Component} from 'react'
import Post from './Post'

const Posts = ({createPost, postPending, posts, selectPost}) => 
	<div>
		Pending: {postPending.toString()}
		<button 
			onClick={() => createPost()}
		>
			Create
		</button>
		{
			posts.map(post => <Post post={post} selectPost={selectPost} key={post._id}/>)
		}
	</div>

export default Posts
