import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../utilities';
import './styles.css';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSticky: false
		};
	}

	scrollToScreen(screenSelector) {
		const nextPage = document.querySelector(screenSelector);
		scrollToElement(nextPage);
	}

	render() {
		return (
			<nav>
				<div className="logo">
					<div
						className="logo-item active"
						onClick={e => this.scrollToScreen('.landing-page')}
					>
						M
					</div>
				</div>
				<div className="menu">
					<div
						className="menu-item active"
						onClick={e => this.scrollToScreen('.my-story')}
					>
						myStory
					</div>
					<div
						className="menu-item"
						onClick={e => this.scrollToScreen('.skill')}
					>
						skills
					</div>
					<div
						className="menu-item"
						onClick={e => this.scrollToScreen('.projects-page')}
					>
						projects
					</div>
					<div
						className="menu-item"
						onClick={e => this.scrollToScreen('.footer-item')}
					>
						{' '}
						getInTouch
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;