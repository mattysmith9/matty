import React from 'react';
import './styles.css';

const SkillsList = props => {
	if (props.render) return props.render;
	else
		return (
			<div className="skill-content">
				<div className="skill-object">
					<div className="skill-title">frontEnd</div>
					<div className="skill-description">
						<span>
							Experience with <br />
							HTML, CSS and JavaScript. I also have Experience building single
							page applications with React. (Including this page)
						</span>
					</div>
				</div>
				<div className="skill-object">
					<div className="skill-title">backEnd</div>
					<div className="skill-description">
						<span>
							Experience with Node.JS, Express, Firebase, MongoDB, MLab and
							Heroku. I am currently learning more about servers and databases
							and hope to extend my backEnd knowledge further.
						</span>
					</div>
				</div>
				<div className="skill-object">
					<div className="skill-title">exploring</div>
					<div className="skill-description">
						<span>
							I have found that I am interested in many different aspects of
							development. I am currently teaching myself Python, Swift and
							Kotlin for languages. I am also interested in Machine Learning and
							Data Science. In the near future I plan on getting into Solidity
							and Blockchain.
						</span>
					</div>
				</div>
			</div>
		);
};

export default SkillsList;
