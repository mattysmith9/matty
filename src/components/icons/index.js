import React, { Component } from 'react';
import './styles.css';

const Icons = props => {
	if (props.render) return props.render;
	else
		return (
			<div className="icon-content">
				<div className={'contact-icons'}>
					<a
						className="awesome-footer"
						target="_blank"
						rel="noopener noreferrer"
						href={'https://github.com/mattysmith9/'}
					>
						<i class="fab fa-github" />
					</a>
					<a
						className="awesome-footer"
						target="_blank"
						rel="noopener noreferrer"
						href={'https://www.linkedin.com/in/mattysmith9/'}
					>
						<i class="fab fa-linkedin" />
					</a>
					<a
						className="awesome-footer"
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:matthewcsmith18@gmail.com"
					>
						<i class="fas fa-envelope" />
					</a>
					<a
						className="awesome-footer"
						target="_blank"
						rel="noopener noreferrer"
						href="linkto:802.598.8466"
					>
						<i class="fas fa-mobile" />
					</a>
				</div>
			</div>
		);
};

export default Icons;
