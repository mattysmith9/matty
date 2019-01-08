import React from 'react';
import './styles.css';

const SkillsList = (props, context) => {
	if (props.render) return props.render;
	else
		return (
			<div className="skills-list">
				<div className="skills-item">
					<div className="skills-item__title">frontEnd</div>
					<div className="skills-item__desc">
						<span>
							Experience with <br />
							HTML, CSS and JavaScript. I also have Experience building small
							single page applications with React. (Including this page)
						</span>
					</div>
				</div>
				<div className="skills-item">
					<div className="skills-item__title">backEnd</div>
					<div className="skills-item__desc">
						<p>
							Experience with <br />
							Node.JS, Express, Firebase, MongoDB, MLab and Heroku.
						</p>
					</div>
				</div>
				<div className="skills-item">
					<div className="skills-item__title">exploring</div>
					<div className="skills-item__desc">
						I have found that I am interested in many different aspects of
						development. I am currently teaching myself Python, Swift and Kotlin
						for languages. I am also interested in Machine Learning and Data
						Science. In the near future I plan on getting into Solidity and
						Blockchain.
					</div>
				</div>
			</div>
		);
};

export default SkillsList;
