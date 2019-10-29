import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../css/NavBar.scss';
import '../css/BurgerMenu.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      isAuthenticated: false,
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
    const { links, isAuthenticated } = this.props;
    this.state.isAuthenticated = isAuthenticated;
    // TODO: fill the link list more programmatically so it's easier to update both mobile and desktop

    return (
      <div id="nav-main">
        <NavLink className="nav-home" to={links.home}>
          {/* TODO: change logo to remove letters when words are there */}
          <img
            className="desktop-logo"
            src="/images/SANavbarLogo.png"
            alt="Stonehaven Academy Logo"
          />
          <img
            className="mobile-logo"
            src="/images/logo-red-stone.png"
            alt="Stonehaven Academy Logo"
          />
        </NavLink>
        {/* <NavLink to={links.home}><h1 id="nav-title">Stonehaven Academy</h1></NavLink> */}
        <ul className="desktop-nav">
          <li>
            <NavLink to={links.path}>Path</NavLink>
          </li>
          <li>
            <NavLink to={links.catalog}>Catalog</NavLink>
          </li>
          {/* Commented out until implemented */}
          <li>
            <NavLink to={links.about}>About</NavLink>
          </li>
          <li><NavLink to={links.support}>Support</NavLink></li>
          <li><a onClick={() => this.closeMenu()} target="_blank" rel="noopener noreferrer" href="https://forms.gle/2YMiTeQ4iuZByx4ZA">Feedback</a></li>
          {/* <li><NavLink to={links.dashboard}>Dashboard</NavLink></li> */}
          {this.state.isAuthenticated ? (<li><NavLink to={links.dashboard}>Dashboard</NavLink></li>) : null}
          {this.state.isAuthenticated ? (<li><NavLink onClick={()=>{console.log('LoGGING OFF'); this.props.handleLogoff();}} to="/">Log Off</NavLink></li>) : (
            <li><NavLink to={links.login}>Login</NavLink></li>)}
          {/* <li><NavLink to={links.login}>Login</NavLink></li> */}
        </ul>
        <div className="mobile-nav">
          <Menu
            right
            isOpen={menuOpen}
            onStateChange={state => this.handleStateChange(state)}
          >
            <NavLink onClick={() => this.closeMenu()} to={links.home}>
              Home
            </NavLink>
            <NavLink onClick={() => this.closeMenu()} to={links.path}>
              Path
            </NavLink>
            <NavLink onClick={() => this.closeMenu()} to={links.catalog}>
              Catalog
            </NavLink>
            <NavLink onClick={() => this.closeMenu()} to={links.about}>
              About
            </NavLink>
            {this.state.isAuthenticated ? (
              <NavLink onClick={() => this.closeMenu()} to={links.dashboard}>
              Dashboard
              </NavLink>
            ) : (null
            )}
            {this.state.isAuthenticated ? (<NavLink onClick={()=>{console.log('Logging OFF'); this.props.handleLogoff();}} to="/">Log Off</NavLink>) : (
              <NavLink to={links.login}>Login</NavLink>)}

            <NavLink onClick={() => this.closeMenu()} to={links.support}>
              Support
            </NavLink>
            <a onClick={() => this.closeMenu()} target="_blank" rel="noopener noreferrer" href="https://forms.gle/2YMiTeQ4iuZByx4ZA">Feedback</a>
          </Menu>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  links: PropTypes.shape({
    home: PropTypes.string,
  }).isRequired,
  isAuthenticated: PropTypes.bool,
};

export default NavBar;
