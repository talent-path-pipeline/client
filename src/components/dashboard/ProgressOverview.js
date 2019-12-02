import React from 'react';
import PropTypes from 'prop-types';

const ProgressOverview = ({ username }) => {
  // stuff
  return (
    <div className="dashboard-body">
      <h1 className="dashboard-header">{`Welcome, ${username}`}</h1>
    </div>
  );
};

ProgressOverview.propTypes = {
  username: PropTypes.string,
};

ProgressOverview.defaultProps = {
  username: 'Anon',
};

export default ProgressOverview;
