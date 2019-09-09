import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../css/NavBar.scss';
import '../css/BurgerMenu.scss';

const links = {
  home: '/',
  paths: '/path',
  catalog: '/catalog',
  support: '/support',
  login: '/login',
  signup: '/signUp',
  about: '/about',
  dashboard: '/dashboard',
};

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      menuOpen: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <div id="nav-main">
        <NavLink to={links.home}><h1 id="nav-title">Stonehaven Academy</h1></NavLink>
        <ul className="desktop-nav">
          <li><NavLink to={links.paths}>Paths</NavLink></li>
          <li><NavLink to={links.catalog}>Catalog</NavLink></li>
          <li><NavLink to={links.support}>Support</NavLink></li>
          <li><NavLink to={links.about}>About</NavLink></li>
          <li><NavLink to={links.signup}>SignUp</NavLink></li>
          <li><NavLink to={links.login}>Login</NavLink></li>
          <li><NavLink to={links.dashboard}>Dashboard</NavLink></li>
        </ul>
        <div className="mobile-nav">
          <Menu
            right
            isOpen={menuOpen}
            onStateChange={state => this.handleStateChange(state)}
          >
            <NavLink onClick={() => this.closeMenu()} to={links.home}>Home</NavLink>
            <NavLink onClick={() => this.closeMenu()} to={links.paths}>Paths</NavLink>
            <NavLink onClick={() => this.closeMenu()} to={links.catalog}>Catalog</NavLink>
            <NavLink onClick={() => this.closeMenu()} to={links.about}>About</NavLink>
            <NavLink onClick={() => this.closeMenu()} to={links.signup}>SignUp</NavLink>
            <NavLink onClick={() => this.closeMenu()} to={links.login}>LogIn</NavLink>
            <NavLink onClick={() => this.closeMenu()} to={links.dashboard}>Dashboard</NavLink>
          </Menu>
        </div>
      </div>
    );
  }
}

export default NavBar;