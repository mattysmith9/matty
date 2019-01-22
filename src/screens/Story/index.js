import React, { Component } from 'react';
import './styles.css';
import { toElement as scrollToElement } from '../../utilities';

class MyStory extends Component {
	constructor(props) {
		super(props);
	}
	scrollToScreen(screenSelector) {
		const nextPage = document.querySelector(screenSelector);
		scrollToElement(nextPage);
	}
	render() {
		return (
			<div className="my-story">
				<div className="story-heading">a few quick facts...</div>
				<div className="story-information">
					<p>
						Hola, I'm Matty. I have a cat named Blue, I love golf, I live in
						Burlington, Vermont, I could read about sacred geometry for hours,
						Alan Watts is cool, I have been programming for four months and this
						is my first portfolio page.
					</p>
					<p>
						<strong>
							"The only way to make sense out of change is to plunge into it,
							move with it, and join the dance. "{' '}
						</strong>
						<br />
						<br />
						About four months ago I enrolled in a bootcamp to learn how to code.
						I can defintely say it was one of the best decisions I have made.
						Coming from a Construction / Mortgage Broker background I needed a
						change of pace and programming has certainly delivered. The amount
						of information intake that has been involved with this journey so
						far is mind boggling but I am enjoying the journey so far.
					</p>
				</div>

				<div className="pagination">
					<i
						class="fas fa-caret-down"
						onClick={e => this.scrollToScreen('.skills-page')}
					/>
				</div>
			</div>
		);
	}
}

export default MyStory;
