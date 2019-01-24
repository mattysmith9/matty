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
			<div className="landing-container">
				<Nav />
				<div className="intro-circle">
					<div className="name">mattySmith</div>
					<div className="info">
						web developer | engineer | aspiring polyglot | avid golfer
					</div>
				</div>
				<div className="pagination">
					<i
						class="fas fa-arrow-down"
						onClick={e => this.scrollToScreen('.my-story')}
					>
						<p className="pagination-text">{'my story'}</p>
					</i>
				</div>
			</div>
		);
	}
}

export default Landing;
