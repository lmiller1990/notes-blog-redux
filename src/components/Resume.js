import React, {Component} from 'react'
import ResumeTile from './ResumeTile'
import experience from '../data/resume'

class Resume extends Component {
	render() {
		return(
			<div>
				<div className="header">
					Resume - coming soon.
				</div>
					{
						experience.map(exp => <ResumeTile key={exp.id} experience={exp} />)
					}
			</div>
		)
	}
}

export default Resume
