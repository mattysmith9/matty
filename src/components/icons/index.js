import React from 'react';
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
						href="mailto:matthewcsmith18@gmail.com?Subject=Contact%20Matty"
						target="_top"
					>
						<i class="fas fa-envelope" />
					</a>
				</div>
			</div>
		);
};

export default Icons;
