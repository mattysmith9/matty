import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MyStory = (props, context) => {
	return (
		<div className="my-story">
			<div className="story-wrapper">
				<div className="story-information">
					<div className="story-title">
						<p>here are a few quick facts about myself</p>
						<section>
							<div className="quick-facts">
								<p>
									Hola, I'm Matty. I have a cat named Blue, I love golf, I live
									in Burlington, Vermont, I could read about sacred geometry for
									hours, I have been programming for four months and this is my
									first portfolio page.
								</p>
							</div>
						</section>
					</div>
					<div className="more-info">
						<p>a little more about me</p>
						<section className="me">
							<ul className="extra">
								<p className="fuck">
									About four months ago I enrolled in a bootcamp to learn how to
									code. I can defintely say it was one of the best decisions I
									have made. Coming from a Construction / Mortgage Broker
									background I needed a change of pace and programming has
									certainly delivered. The amount of information intake that has
									been involved with this journey so far is mind boggling. The
									area of focus for the bootcamp was frontEnd and backend
									development with a focus on JavaScript.
								</p>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MyStory;
