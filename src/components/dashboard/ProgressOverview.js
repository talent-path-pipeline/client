import React from 'react';
import PropTypes from 'prop-types';
import { CatalogList } from '..';
import { tokenServices } from '../../utils';

const ProgressOverview = ({ started_courses, started_lessons, completed_lessons }) => {
  let user = tokenServices.getToken();
  if (!user) {
    user = { fullName: 'Anon', id: 'No User ID' };
  }

  return (
    <div className="dashboard-body">
      <h1 className="dashboard-header">{`Welcome, ${user.fullName}`}</h1>
      <CatalogList courses={started_courses} completed_lessons={completed_lessons} />
    </div>
  );
};

ProgressOverview.propTypes = {
  // TODO:
};

ProgressOverview.defaultProps = {
  // TODO:
};

export default ProgressOverview;
