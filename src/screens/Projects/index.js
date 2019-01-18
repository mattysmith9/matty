import React from 'react';
import ProjectItems from '../../components/project-list';
import './styles.css';

const Projects = (props, context) => {
	return (
		<div className="projects-page">
			<div className="projects-wrapper">
				<div className="content-grid">
					<h1>projects</h1>
					<div className="projects-wrapper">
						<ProjectItems />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
