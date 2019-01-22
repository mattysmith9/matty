import React from 'react';
import './styles.css';

const ProjectItems = (props, context) => {
	if (props.render) return props.render;
	else
		return (
			<div className="project-content">
				<div className="project-item">
					<div className="project-item--title">the startUp report</div>
					<div className="project-item--desc">
						<span>
							The Startup Report was my capstone project for my coding bootcamp.
							It is still a work in progress. It was built using React, NodeJS,
							Express, MongoDB, MLab and deployed via Heroku.
						</span>
					</div>
					<div className="project-item--links">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/BurlingtonCodeAcademy/startup-vermont"
						/>
						<div className="source">{'source code'}</div>
					</div>
				</div>
				<div className="project-item">
					<div className="project-item--title">geoVermonter</div>
					<div className="project-item--desc">
						<span>
							A fun remake of Googles GeoGuesser app. We made the borders
							smaller only allowing the State of Vermont. We used React for the
							front end and NodeJS for the back end.
						</span>
					</div>
					<div className="project-item--links">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/BurlingtonCodeAcademy/geo-vermonter-with-react-jonathan-and-matty-geo-vermonter"
						/>
						<div className="source">{'source code'}</div>
					</div>
				</div>
				<div className="project-item">
					<div className="project-item--title">my portfolio page</div>
					<div className="project-item--desc">
						<span>
							My first personal portfolio page to showcase a bit about myself.
							The app was built with React and deployed via GH-Pages.
						</span>
					</div>
					<div className="project-item--links">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/mattysmith9/mattysmith9"
						/>
						<div className="source">{'source code'}</div>
					</div>
				</div>
				<div className="project-item">
					<div className="project-item--title">pomodoro timer</div>
					<div className="project-item--desc">
						<span>
							A fun take on the famous Pomodoro technique. It is a simple
							example of a Pomodoro Timer built with vanilla JavaScript, HTML
							and CSS.
						</span>
					</div>
					<div className="project-item--links">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/mattysmith9/pomodoro-matty-and-leight-pomodoro"
						/>
						<div className="source">{'source code'}</div>
					</div>
				</div>
			</div>
		);
};

export default ProjectItems;
