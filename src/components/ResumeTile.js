import React from 'react'
import Technologies from './Technologies'

const ResumeTile = ({ experience }) => {
	return(
		<div className="project-tile">
			<div className="header">
				<a href={experience.link}>
					{experience.company}
				</a>
			</div>
			<div className="indented-link">
				<div>
					{experience.description}
				</div>
				<Technologies technologies={experience.technologies} />
			</div>
		</div>
	)
}

export default ResumeTile
