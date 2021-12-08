// @ts-nocheck

import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import PersonalInfo from "../components/PersonalInfo";

import About from "./HomeContent/About";
import Projects from "./HomeContent/Projects";
import Experience from "./HomeContent/Experience";
import Skills from "./HomeContent/Skills";
import Education from "./HomeContent/Education";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const RowContainer = styled.div`
  display: flex;
  gap: 2rem;

  width: 95%;
  height: 90%;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  height: 100%;
`;

const pageContent = {
  about: <About />,
  projects: <Projects />,
  experience: <Experience />,
  skills: <Skills />,
  education: <Education />,
};

const Home: NextPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <MainContainer>
      <RowContainer>
        <PersonalInfo />
        <ColumnContainer>
          <Navbar />
          <MainContent>{pageContent[router.query.page]}</MainContent>
        </ColumnContainer>
      </RowContainer>
    </MainContainer>
  );
};

export default Home;
