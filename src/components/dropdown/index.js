import React from 'react';
import './styles.css';

const DropDown = (props) => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li class="dropdown">
          <a href=".my-story" class="drop-button">
            Resume
          </a>
          <div class="dropdown-content">
            <a href=".footer">Link 1</a>
            <a href=".landing-page">Link 2</a>
            <a href=".projects-page">802.598.9466</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
