import React, {Component} from 'react'
import Technologies from './Technologies'

const ProjectTile = ({project}) => 
	<div className="project-tile">
		<div className="header">
			<a href={project.link}>
				{project.title}
			</a>
		</div>
		<div className="indented-link">
			<div>
				{project.description}
			</div>
			<Technologies technologies={project.technologies} />
		</div>
	</div>

export default ProjectTile
