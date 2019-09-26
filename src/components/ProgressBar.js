import React from 'react';
import PropTypes from 'prop-types';
import '../css/ProgressBar.scss';

const ProgressBar = ({ label, value, max, showLabel }) => {
  const percent = Math.floor((value / max) * 1000) / 10;
  const label_text = label === '%' ? `${percent}%` : `${value} of ${max} ${label}`;
  return (
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${percent > 99.9 ? 99.9 : percent}%` }}
      />
      {showLabel && <p className="progress-label">{label_text}</p>}
    </div>
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
};

ProgressBar.defaultProps = {
  label: '%',
  value: 0,
  showLabel: true,
};

export default ProgressBar;
