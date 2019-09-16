import React from 'react';
import PropTypes from 'prop-types';
import  AboutInfo from '../about/AboutInfo';
import '../../css/pages/AboutPage.scss';

const AboutPage = ({ about_data }) => (
  <div className="about-page">
    <AboutInfo
      title={about_data.title}
      subtitle={about_data.subtitle}
      subtitle2={about_data.subtitle2}
      image_link={about_data.image_link}
    />
  </div>
);

AboutPage.propTypes = {
  about_data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image_link: PropTypes.string,
  }).isRequired,
};

export default AboutPage;
