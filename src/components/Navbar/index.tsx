import Link from "next/link";

import { Button, NavbarContainer } from "./styles";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Link href="/" passHref>
        <a>
          <Button>About</Button>
        </a>
      </Link>
      <Link href="/projects" passHref>
        <a>
          <Button>Projects</Button>
        </a>
      </Link>
      <Link href="/" passHref>
        <a>
          <Button>Experience</Button>
        </a>
      </Link>
      <Link href="/" passHref>
        <a>
          <Button>Skills</Button>
        </a>
      </Link>
      <Link href="/" passHref>
        <a>
          <Button>Education</Button>
        </a>
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
