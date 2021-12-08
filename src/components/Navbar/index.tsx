import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

import { Button, NavbarContainer } from "./styles";

const Navbar: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/?page=about", undefined, { shallow: true });
    }
  }, []);

  return (
    <NavbarContainer>
      <Button
        onClick={() =>
          router.push("/?page=about", undefined, { shallow: true })
        }
        active={router.query.page === "about"}
      >
        About
      </Button>

      <Button
        onClick={() =>
          router.push("/?page=projects", undefined, { shallow: true })
        }
        active={router.query.page === "projects"}
      >
        Projects
      </Button>

      <Button
        onClick={() =>
          router.push("/?page=experience", undefined, { shallow: true })
        }
        active={router.query.page === "experience"}
      >
        Experience
      </Button>

      <Button
        onClick={() =>
          router.push("/?page=skills", undefined, { shallow: true })
        }
        active={router.query.page === "skills"}
      >
        Skills
      </Button>

      <Button
        onClick={() =>
          router.push("/?page=education", undefined, { shallow: true })
        }
        active={router.query.page === "education"}
      >
        Education
      </Button>
    </NavbarContainer>
  );
};

export default Navbar;
