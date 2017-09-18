import React, {Component} from 'react'

const techLabel = (color) => {
	return {
		color,
		border: `1px solid ${color}`,
		borderRadius: '4px',
		padding: '1px',
		fontSize: '0.8em',
		marginRight: '2px'
	}
}

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
			<div>
				{project.techonogies.map(tech => 
					<span key={tech.name} className="tech-label" style={techLabel(tech.color)}>
						{tech.name}
					</span>
				)}
			</div>
		</div>
	</div>

export default ProjectTile
