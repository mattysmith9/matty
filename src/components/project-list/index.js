import React from 'react';
import './styles.css';

const ProjectItems = (props, context) => {
	if (props.render) return props.render;
	else
		return (
			<div className="project-list">
				<div className="project-item">
					<div className="project-item__title">the startUp report</div>
					<div className="project-item__desc">
						<span className="report">
							The Startup Report was my capstone project for my coding bootcamp.
							It is still a work in progress. It was built using React, NodeJS,
							Express, MongoDB, MLab and deployed via Heroku.
						</span>
					</div>
					<div className="project-item__links">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/BurlingtonCodeAcademy/startup-vermont"
						>
							<button className="code">source code</button>
						</a>
					</div>
				</div>
				<div className="project-item">
					<div className="project-item__title">geoVermonter</div>
					<div className="project-item__desc">
						<span className="geo">
							A fun remake of Googles GeoGuesser app. We made the borders
							smaller only allowing the State of Vermont. We used React for the
							front end and NodeJS for the back end.
						</span>
					</div>
					<div className="project-item__links">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/BurlingtonCodeAcademy/geo-vermonter-with-react-jonathan-and-matty-geo-vermonter"
						>
							<button className="code">source code</button>
						</a>
					</div>
				</div>
				<div className="project-item">
					<div className="project-item__title">my portfolio page</div>
					<div className="project-item__desc">
						<span className="personal">
							My first personal portfolio page to showcase a bit about myself.
							The app was built with React and deployed via GH-Pages.
						</span>
					</div>
					<div className="project-item__links">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/mattysmith9/mattysmith9"
						>
							<button className="code">source code</button>
						</a>
					</div>
				</div>
				<div className="project-item">
					<div className="project-item__title">pomodoro timer</div>
					<div className="project-item__desc">
						<p className="pomodoro">
							A fun take on the famous Pomodoro technique. It is a simple
							example of a Pomodoro Timer built with vanilla JavaScript, HTML
							and CSS.
						</p>
					</div>
					<div className="project-item__links">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/mattysmith9/pomodoro-matty-and-leight-pomodoro"
						>
							<button className="code">source code</button>
						</a>
					</div>
				</div>
			</div>
		);
};

export default ProjectItems;
