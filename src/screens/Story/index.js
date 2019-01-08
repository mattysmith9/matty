import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MyStory = (props, context) => {
	return (
		<div className="my-story">
			<div className="story-wrapper">
				<div className="story-title">Hola, I'm Matty!</div>
				<div className="story-information">
					<p className="intro">
						I recently completed a fullstack Javascript bootcamp in Burlington,
						Vermont.
						<br /> While the course was difficult I really enjoyed being outside
						of my comfort zone everyday.
					</p>
					<p className="personal" />
					<p className="end" />
				</div>
			</div>
		</div>
	);
};
export default MyStory;
