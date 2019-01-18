import React from 'react';
import Nav from '../../components/nav';
import './styles.css';

const Landing = props => {
	return (
		<div className="landing-page">
			<Nav />
			<div className="intro-wrapper">
				<div className="name">mattySmith</div>
				<div className="info">
					web developer | engineer | aspiring polyglot | avid golfer
				</div>
			</div>
		</div>
	);
};

export default Landing;
