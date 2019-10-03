import React from 'react';
// components
import AboutTeamCard from './AboutTeamCard';
// helpers
import memberObj from '../../data/memberInfo';
// scss
import '../../css/about/AboutTeam.scss';

class AboutTeam extends React.Component {
  render() {
    const memberInfo = Object.values(memberObj);
    return (
      <section className="teamMemberGrid">
        {memberInfo.map(member => (
          <AboutTeamCard
            key={member.fullName}
            img={member.src}
            fullName={member.fullName}
            character={member.character}
            role={member.role}
            link={member.link}
          />
        ))}
      </section>
    );
  }
}

export default AboutTeam;
