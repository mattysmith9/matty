import React from 'react';
import './styles.css';

const ProjectItems = (props, context) => {
	if (props.render) return props.render;
	else
		return (
			<div className="project-content">
				<div className="project-item">
					<div className="project-item--title">
						vt. startUp tracker
						<div className="project-item--desc">
							<span>
								The startup tracker is a website for LaunchVT that tracks local
								startup activity in the state of Vermont. It is still a work in
								progress and It was built using React, NodeJS, Express, MongoDB, MLab
								and deployed via Heroku. More additions to come...
							</span>
						</div>
					</div>
					<div className="project-item--links">
						<a
							className="awesome-source"
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/BurlingtonCodeAcademy/startup-vermont"
						>
							<i class="fas fa-file-code" />
						</a>
					</div>
				</div>
				<div className="project-item">
					<div className="project-item--title">
						geoVermonter
						<div className="project-item--desc">
							<span>
								A fun remake of Googles GeoGuesser app. We made the borders smaller
								only allowing the State of Vermont. We used React for the front end
								with geoJSON and Node for the back end.
							</span>
						</div>
					</div>
					<div className="project-item--links">
						<a
							className="awesome-source"
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/BurlingtonCodeAcademy/geo-vermonter-with-react-jonathan-and-matty-geo-vermonter"
						>
							<i class="fas fa-file-code" />
						</a>
					</div>
				</div>
				<div className="project-item">
					<div className="project-item--title">
						my portfolio page
						<div className="project-item--desc">
							<span>
								My first personal portfolio page to showcase a bit about myself. The
								page was bootstrapped with Create React App. Building the page was a
								good oppurtunity to deploy a webpage with a custom domain name.
							</span>
						</div>
					</div>
					<div className="project-item--links">
						<a
							className="awesome-source"
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/mattysmith9/mattysmith9.github.io"
						>
							<i class="fas fa-file-code" />
						</a>
					</div>
				</div>
				<div className="project-item">
					<div className="project-item--title">
						pomodoro timer
						<div className="project-item--desc">
							<span>
								A fun take on the famous Pomodoro technique. It is a simple example
								of a Pomodoro Timer built with vanilla JavaScript, HTML and CSS.
							</span>
						</div>
					</div>
					<div className="project-item--links">
						<a
							className="awesome-source"
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/mattysmith9/pomodoro-matty-and-leight-pomodoro"
						>
							<i class="fas fa-file-code" />
						</a>
					</div>
				</div>
			</div>
		);
};

export default ProjectItems;
