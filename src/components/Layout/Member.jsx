import "./Member.css";
import { Heading } from "../Helper";

import {FaLinkedinIn, FaTwitter} from 'react-icons/fa'

const MemberCard = ({ member }) => {
  return (
    <div className="member__card">
      <img src={member.src} alt={member.alt} />
      <div className="whiteTxt card__data">
        <h3>{member.name}</h3>
        <h4 className="blueTxt">{member.desc}</h4> 
        <div className="card__social">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
          <a href={member.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
        </div>
      </div>
    </div>
  );
};

const Member = ({ data, id, primary, secondary, tertiary, quad }) => {
  return (
    <div id={id} className="member">
      <div className="member__head">
        {" "}
        <Heading
          primary={primary}
          secondary={secondary}
          tertiary={tertiary}
          quad={quad}
        />
      </div>
      <div className="member__data">
        {data.map((item, index) => {
          return <MemberCard key={index} member={item} />;
        })}
      </div>
    </div>
  );
};

export default Member;
