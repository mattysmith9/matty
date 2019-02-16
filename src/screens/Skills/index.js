import React, { Component } from 'react';
import SkillsList from '../../components/skills-list';
import { toElement as scrollToElement } from '../../utilities';

import './styles.css';

class Skills extends Component {
	constructor(props) {
		super(props);
	}
	scrollToScreen(screenSelector) {
		const nextPage = document.querySelector(screenSelector);
		scrollToElement(nextPage);
	}

	render() {
		return (
			<div className="skills-page">
				<div className="skills-wrapper">
					<div className="content-grid">
						<h1 className="skill-header">skills, qualifications & interests...</h1>
						<div className="skills-wrapper">
							<SkillsList />
						</div>
					</div>
				</div>
				<div className="pagination">
					<i
						class="fas fa-arrow-down"
						onClick={e => this.scrollToScreen('.projects-page')}
					>
						<p className="pagination-text">
							{'projects'}
						</p>
					</i>
				</div>
			</div>
		);
	}
}

export default Skills;
