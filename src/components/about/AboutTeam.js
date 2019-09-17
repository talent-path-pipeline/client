import React from 'react';
// components
import TeamMember from '../components/TeamMember';
// helpers
import memberObj from '../data/memberInfo';
// scss
import '../styles/AboutTeam.scss';

class AboutTeam extends React.Component {
  render() {
    const memberInfo = Object.values(memberObj);
    return (
      <section className="teamMemberGrid">
        {memberInfo.map(member => (
          <TeamMember
            key={member.fullName}
            img={member.src}
            fullName={member.fullName}
            role={member.role}
            mailLink={member.mailLink}
          />
        ))}
      </section>
    );
  }
}

export default AboutTeam;
