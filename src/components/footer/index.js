import React, { Component } from 'react';
import Icons from '../../components/icons';
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
				<div className="contain">
					<div class="social">
						<Icons />
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
