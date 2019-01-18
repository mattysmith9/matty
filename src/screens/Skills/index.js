import React from 'react';
import SkillsList from '../../components/skills-list';
import './styles.css';

const Skills = (props, context) => {
	return (
		<div className="skills-page">
			<div className="skills-wrapper">
				<div className="content-grid">
					<h1>skills, qualifications & interests</h1>
					<div className="skills-wrapper">
						<SkillsList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
