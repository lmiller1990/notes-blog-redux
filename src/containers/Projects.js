import React, {Component} from 'react'
import ProjectTile from '../components/ProjectTile'
import projects from '../data/projects'

class Projects extends Component {
	render() {
		return(
			<div>
				<div className="header">
					Projects
				</div>
				{
					projects.map(project => 
						<ProjectTile key={project.id} project={project} />
					)
				}
			</div>
		)
	}
}

export default Projects
