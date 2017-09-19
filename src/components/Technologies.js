import React from 'react'

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

const Technologies = ({ technologies }) => {
	return (
		<div>
			{technologies.map(tech => 
				<span key={tech.name} className="tech-label" style={techLabel(tech.color)}>
					{tech.name}
				</span>
			)}
		</div>
	)
}

export default Technologies
