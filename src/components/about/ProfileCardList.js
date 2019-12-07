import React from 'react';
import PropTypes from 'prop-types';
import { ProfileCard } from '..';
import '../../css/about/ProfileCardList.scss';

const ProfileCardList = ({ profile_list }) => (
  <section className="profile-list">
    {profile_list.map(profile => (
      <ProfileCard profile={profile} key={profile.name} />
    ))}
  </section>
);

ProfileCardList.propTypes = {
  profile_list: PropTypes.arrayOf(
    PropTypes.shape({
      img_src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      roles: PropTypes.arrayOf(PropTypes.string).isRequired,

      nickname: PropTypes.string,
      nickname_link: PropTypes.string,
      contact_link: PropTypes.string,
      details: PropTypes.string,
    }),
  ).isRequired,
};

export default ProfileCardList;
