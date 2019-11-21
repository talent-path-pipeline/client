import React from 'react';
// components
import AboutTeamCard from './AboutTeamCard';
// scss
import '../../css/about/AboutTeam.scss';

const AboutTeam = ({ memberObject }) => {
  const memberInfo = Object.values(memberObject);
  return(
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

export default AboutTeam;
