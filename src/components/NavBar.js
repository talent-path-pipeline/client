import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.scss';

const links = {
  home: '/',
  paths: '/path',
  catalog: '/catalog',
  support: '/login',
  about: '/about',
  dashboard: '/dashboard',
};

const NavBar = () => <div id="nav-main">
  <NavLink to={links.home}><img id="nav-image" src="./images/logo.png" alt="main-logo"/></NavLink>
  <ul id="nav-list">
    <li><NavLink to={links.paths}>Paths</NavLink></li>
    <li><NavLink to={links.catalog}>Catalog</NavLink></li>
    <li><NavLink to={links.support}>Support</NavLink></li>
    <li><NavLink to={links.about}>About</NavLink></li>
    <li><NavLink to={links.dashboard}>Dashboard</NavLink></li>
  </ul>
</div>;

export default NavBar;