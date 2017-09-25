import React from 'react'
import Technologies from './Technologies'

const ResumeTile = ({ experience }) => {
	return(
		<div className="project-tile">
			<div className="inline-header">
				<a href={experience.link}>
					{experience.company}
				</a>
			</div>
			<div style={{display: 'inline-block', fontSize: '0.85em'}}>
				{experience.timespan}
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
