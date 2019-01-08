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
			<footer>
				<div className="footer-item">
					<div className="title">
						Burlington, Vermont
						<li>802.598.9466</li>
						<p>matthewcsmith18@gmail.com</p>
					</div>
					<div className="footer-content">
						<span>
							<a href="https://www.linkedin.com/in/mattysmith9/">
								<img
									src="https://img.icons8.com/color/48/000000/linkedin.png"
									alt="Matty Smith's Linkedin Profile"
									height="70"
									width="70"
								/>
							</a>
						</span>
						<span>
							<a href="https://github.com/mattysmith9/">
								<img
									src="https://img.icons8.com/color/48/000000/github.png"
									alt="Matty Smith's GitHub Profile"
									height="70"
									width="70"
								/>
							</a>
						</span>
						<span>
							<a href="https://dev.to/mattysmith9">
								<img
									src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
									alt="Matty Smith's DEV Profile"
									height="70"
									width="70"
								/>
							</a>
						</span>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
