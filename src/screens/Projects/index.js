import React, { Component } from 'react';
import ProjectItems from '../../components/project-list';
import { toElement as scrollToElement } from '../../utilities';
import './styles.css';

class Projects extends Component {
	constructor(props) {
		super(props);
	}

	scrollToScreen(screenSelector) {
		const nextPage = document.querySelector(screenSelector);
		scrollToElement(nextPage);
	}

	render() {
		return (
			<div className="projects-page">
				<div className="projects-wrapper">
					<div className="content-grid">
						<h1 className="project-header">
							a few projects I have worked on so far...
						</h1>
						<div className="projects-wrapper">
							<ProjectItems />
						</div>
					</div>
				</div>
				<div className="pagination">
					<i class="fas fa-arrow-down" onClick={e => this.scrollToScreen('.footer')}>
						<p className="pagination-text">
							{'get in touch'}
						</p>
					</i>
				</div>
			</div>
		);
	}
}

export default Projects;
