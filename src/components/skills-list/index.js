import React from 'react';
import './styles.css';

const SkillsList = props => {
	if (props.render) return props.render;
	else
		return (
			<div className="skill-content">
				<div className="skill-object">
					<div className="skill-title">
						frontEnd
						<div className="skill-description">
							<span>
								Experience with <br />
								HTML, CSS and JavaScript fundamentals as well as experience with
								Create React App building single page applications as well as
								static sites including this page and a Vermont startup tracker.
							</span>
						</div>
					</div>
					<div className="code-awesome">
						<i class="fab fa-js" />
						<i class="fab fa-react" />
						<i class="fab fa-html5" />
						<i class="fab fa-css3-alt" />
					</div>
				</div>
				<div className="skill-object">
					<div className="skill-title">
						backEnd
						<div className="skill-description">
							<span>
								Experience with Node, Express, Firebase, MongoDB, Heroku and
								source control using Github. I am currently working on extending
								my knowledge further as I have found the back-end to be very
								interesting.
							</span>
						</div>
					</div>
					<div className="code-awesome">
						<i class="fab fa-node" />
						<i class="fab fa-github-square" />
						<i class="fas fa-terminal" />
					</div>
				</div>
				<div className="skill-object">
					<div className="skill-title">
						exploring
						<div className="skill-description">
							<span>
								I am open to learning about anything interesting I come across.
								At this moment I am starting to experiment with Python and
								Kotlin on the language side of things. Blockchain has peaked my
								interest for a while now and I would love to gain some
								experience in data science and machine learning as well.
							</span>
						</div>
					</div>
					<div className="code-awesome">
						<i class="fas fa-chalkboard-teacher" />
					</div>
				</div>
			</div>
		);
};

export default SkillsList;
