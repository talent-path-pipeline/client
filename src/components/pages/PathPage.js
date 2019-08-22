import React from 'react';
import PropTypes from 'prop-types';
import { PathInfo, PathTree } from '..';

const PathPage = ({ path_data }) => (
  <div className="path-page">
    <PathInfo
      title={path_data.title}
      description={path_data.description}
      image_link={path_data.image_link}
    />
    <PathTree courses={path_data.courses} />
  </div>
);

PathPage.propTypes = {
  path_data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image_link: PropTypes.string,
    courses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PathPage;
