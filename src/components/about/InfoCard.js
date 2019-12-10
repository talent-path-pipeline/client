import React from 'react';
import PropTypes from 'prop-types';
import '../../css/about/InfoCard.scss';

const InfoCard = ({ card_info }) => {
  const { img_src, img_alt, description } = card_info;
  return (
    <div className="info-card">
      <img className="icon" src={img_src} alt={img_alt} />
      <section className="card-body">
        <p className="card-description">{description}</p>
      </section>
    </div>
  );
};

InfoCard.propTypes = {
  card_info: PropTypes.shape({
    img_src: PropTypes.string.isRequired,
    img_alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default InfoCard;
