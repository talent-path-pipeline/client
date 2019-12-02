import React from 'react';
import PropTypes from 'prop-types';
import { tokenServices } from '../../utils';

const AccountSettings = ({ username, user_id }) => (
  <div className="dashboard-body">
    <h1 className="dashboard-header">{`${username}'s Account`}</h1>
    <p className="dashboard-text">{`User ID: ${user_id}`}</p>
  </div>
);

AccountSettings.propTypes = {
  username: PropTypes.string,
  user_id: PropTypes.string,
};

AccountSettings.defaultProps = {
  username: 'Anon',
  user_id: 'No User ID',
};

export default AccountSettings;
