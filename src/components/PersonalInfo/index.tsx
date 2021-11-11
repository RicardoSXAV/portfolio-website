import { BsGithub, BsLinkedin } from "react-icons/bs";

import { Column, GithubInfo, Link, Image, LinkedinInfo, Title } from "./styles";
import profilePicture from "../../assets/profile-picture.jpg";

const PersonalInfo: React.FC = () => {
  return (
    <Column>
      <Image src={profilePicture.src} />

      <Title>Software Developer</Title>

      <Link href="https://github.com/ricardosxav" target="_blank">
        <GithubInfo>
          <BsGithub />
          <p>RicardoSXAV</p>
        </GithubInfo>
      </Link>
      <Link href="https://linkedin.com/in/ricardosantosxav" target="_blank">
        <LinkedinInfo>
          <BsLinkedin />
          <p>ricardosantosxav</p>
        </LinkedinInfo>
      </Link>
    </Column>
  );
};

export default PersonalInfo;
