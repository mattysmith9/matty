import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSticky: true
		};
	}

	render() {
		return (
			<div className="footer">
				<div className="footer-wrapper">
					<ul className="linked">
						<li>
							<a href="https://www.linkedin.com/in/mattysmith9/">
								<img
									src="https://img.icons8.com/color/48/000000/linkedin.png"
									alt="Matty Smiths Linkedin Profile"
									height="60"
									width="60"
								/>
							</a>
						</li>
						<li>
							<a href="https://github.com/mattysmith9/">
								<img
									src="https://img.icons8.com/color/48/000000/github.png"
									alt="Matty Smiths GitHub Profile"
									height="60"
									width="60"
								/>
							</a>
						</li>
						<li>
							<a href="https://dev.to/mattysmith9">
								<img
									src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
									alt="Matty Smith's DEV Profile"
									height="60"
									width="60"
								/>
							</a>
						</li>
						<li>
							<a href="mailto:matthewcsmith18@gmail.com">
								<img
									src="https://img.icons8.com/color/48/000000/gmail.png"
									alt="Matty Smith's EMAIL"
									height="65"
									width="60"
								/>
							</a>
						</li>
						<li>
							<a href="linkto:802.598.8466">
								<img
									src="https://img.icons8.com/ultraviolet/48/000000/resume.png"
									alt="Phone Number"
									height="55"
									width="60"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Footer;
