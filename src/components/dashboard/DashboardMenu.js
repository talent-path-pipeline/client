import React from 'react';
import PropTypes from 'prop-types';
import '../../css/dashboard/DashboardMenu.scss';

const DashboardMenu = ({ username, active, section_list, goToSection, handleLogOut }) => (
  <div className="dashboard-menu">
    <h1 className="menu-header">{`${username}'s Dashboard`}</h1>
    <ul>
      {Object.keys(section_list).map(section => (
        <li key={section}>
          {active === section ? (
            <span className="active-view">{section_list[section]}</span>
          ) : (
            <button type="button" onClick={() => goToSection(section)}>
              {section_list[section]}
            </button>
          )}
        </li>
      ))}
      <li>
        <button type="button" onClick={handleLogOut}>
          Log Out
        </button>
      </li>
    </ul>
  </div>
);

DashboardMenu.propTypes = {
  username: PropTypes.string,
  active: PropTypes.string.isRequired,
  section_list: PropTypes.shape({
    overview: PropTypes.string,
    settings: PropTypes.string,
  }).isRequired,
  goToSection: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

DashboardMenu.defaultProps = {
  username: 'Anon',
};

export default DashboardMenu;
