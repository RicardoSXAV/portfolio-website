import type { NextPage } from "next";
import styled from "styled-components";

import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import PersonalInfo from "../components/PersonalInfo";

const HomeContainer = styled.div`
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

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <RowContainer>
        <PersonalInfo />
        <ColumnContainer>
          <Navbar />
          <MainContent></MainContent>
        </ColumnContainer>
      </RowContainer>
    </HomeContainer>
  );
};

export default Home;
