import React, {Component} from 'react'
import {Link} from 'react-router-dom'

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
			posts.map(post => 
				<div key={post._id}>
					<Link 
						to={`posts/${post._id}`}
						onClick={() => selectPost(post._id)}
					>
						{post.title}
					</Link>
				</div>
			)
		}
	</div>

export default Posts
