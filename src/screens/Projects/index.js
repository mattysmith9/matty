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
						<h1>a few projects...</h1>
						<div className="projects-wrapper">
							<ProjectItems />
						</div>
					</div>
				</div>
				<div className="pagination">
					<i
						class="fas fa-caret-down"
						onClick={e => this.scrollToScreen('.footer')}
					/>
				</div>
			</div>
		);
	}
}

export default Projects;
