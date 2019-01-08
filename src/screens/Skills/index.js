import React from 'react';
import PropTypes from 'prop-types';
import SkillsList from '../../components/skills-list';
import './styles.css';

const Skills = (props, context) => {
	return (
		<div className="skills-page">
			<div className="content-grid">
				<h1 className="skill"> skills, qualifications & interests</h1>
				<div className="skills-wrapper">
					<SkillsList />
				</div>
			</div>
		</div>
	);
};

export default Skills;
