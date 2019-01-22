import React, { Component } from 'react';
import Nav from '../../components/nav';
import { toElement as scrollToElement } from '../../utilities';
import './styles.css';

class Landing extends Component {
	constructor(props) {
		super(props);
	}
	scrollToScreen(screenSelector) {
		const nextPage = document.querySelector(screenSelector);
		scrollToElement(nextPage);
	}

	render() {
		return (
			<div className="landing-page">
				<Nav />
				<div className="intro-wrapper">
					<div className="name">mattySmith</div>
					<div className="info">
						web developer | engineer | aspiring polyglot | avid golfer
					</div>
				</div>
				<div className="pagination">
					<i
						class="fas fa-caret-down"
						onClick={e => this.scrollToScreen('.my-story')}
					/>
				</div>
			</div>
		);
	}
}

export default Landing;
