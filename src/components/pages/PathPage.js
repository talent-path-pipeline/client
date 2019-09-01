import React from 'react';
import PropTypes from 'prop-types';
import { PathInfo, PathTree } from '..';
import '../../css/pages/PathPage.scss';

const PathPage = ({ path_data }) => (
  <div className="path-page">
    <PathInfo
      title={path_data.title}
      subtitle={path_data.subtitle}
      subtitle2={path_data.subtitle2}
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
