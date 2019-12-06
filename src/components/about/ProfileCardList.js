import React from 'react';
import PropTypes from 'prop-types';
import { ProfileCard } from '..';
import '../../css/about/ProfileCardList.scss';

const ProfileCardList = ({ profile_list }) => (
  <section className="profile-list">
    {profile_list.map(profile => (
      <ProfileCard profile={profile} />
    ))}
  </section>
);

ProfileCardList.propTypes = {
  profile_list: PropTypes.arrayOf(
    PropTypes.shape({
      img_src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProfileCardList;
