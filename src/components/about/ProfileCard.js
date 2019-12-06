import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import '../../css/about/ProfileCard.scss';

const checkValue = event => {
  if (event.target.checked) {
    ReactGA.event({ category: 'Info', action: 'User flipped a profile open' });
  } else {
    ReactGA.event({ category: 'Info', action: 'User flipped a profile closed' });
  }
};

const ProfileCard = ({ profile }) => (
  // TODO: add tab-index and make flippable on enter key
  <label className="profile-card" htmlFor={`check-${profile.name}`}>
    <input
      className="flip-check"
      id={`check-${profile.name}`}
      type="checkbox"
      onChange={checkValue}
    />
    <div className="flip-card-inner">
      <div className="front" style={{ backgroundImage: `url(${profile.img_src})` }}>
        <div className="image-overlay" />
        <h3 className="profile-name">{profile.name}</h3>
        {profile.roles.map(role => (
          <h5 className="profile-role" key={role}>
            {role}
          </h5>
        ))}
      </div>
      <div className="back">
        <h4 className="profile-name">{profile.name}</h4>
        {profile.nickname ? (
          <h5 className="profile-role">
            {`a.k.a. `}
            {profile.nickname_link ? (
              <a href={profile.nickname_link} target="_blank noopener noreferrer">
                {profile.nickname}
              </a>
            ) : (
              <span>{profile.nickname}</span>
            )}
          </h5>
        ) : (
          ''
        )}
        <p className="profile-details">{profile.details}</p>
        {profile.contact_link ? (
          <a
            href={profile.contact_link}
            target="_blank noopener noreferrer"
            className="contact-link"
          >
            {`See More Work >`}
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  </label>
);

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    img_src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,

    nickname: PropTypes.string,
    nickname_link: PropTypes.string,
    contact_link: PropTypes.string,
    details: PropTypes.string,
  }).isRequired,
};

export default ProfileCard;
