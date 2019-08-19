import React from 'react';
import '../css/navbar.scss'

const NavBar = () =>
  <div id="nav-main">
    <img id="nav-image" src="./images/logo.png" alt="main-logo"/>
    <ul id="nav-list">
      <li>Paths</li>
      <li>Courses</li>
      <li>Support</li>
      <li>About</li>
      <li>Profile</li>
    </ul>
  </div>;

export default NavBar;