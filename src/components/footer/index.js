import React, { Component } from 'react';
import Icons from '../../components/icons';
import DropDown from '../../components/dropdown';
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
        <div className="container">
          <div class="social">
            <Icons />
          </div>
          <p className="copyright">*Page built by Matty Smith 2019*</p>
        </div>
      </div>
    );
  }
}

export default Footer;
