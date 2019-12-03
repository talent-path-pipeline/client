import React from 'react';
import { tokenServices } from '../../utils';

const AccountSettings = () => {
  let user = tokenServices.getToken();
  if (!user) {
    user = { fullName: 'Anon', id: 'No User ID' };
  }

  return (
    <div className="dashboard-body">
      <h1 className="dashboard-header">{`${user.fullName}'s Account`}</h1>
      <hr className="dashboard-line" />
      <p className="dashboard-text">{`User ID: ${user.id}`}</p>
    </div>
  );
};

export default AccountSettings;
