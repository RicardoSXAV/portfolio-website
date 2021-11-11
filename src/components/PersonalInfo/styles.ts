import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 15rem;
  height: 100%;
  padding: 1.5rem;

  background-color: ${COLORS.white};
  border-radius: 25px;
`;

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;

  border-radius: 20px;
`;

export const Title = styled.h3`
  font-weight: 700;
  color: ${COLORS.navyBlue};
`;

export const Link = styled.a`
  text-decoration: none;
  width: 100%;
`;

export const GithubInfo = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  padding: 0.5rem 2rem;

  font-size: 1rem;
  text-decoration: none;
  background-color: ${COLORS.black};
  border-radius: 20px;
  color: ${COLORS.white};

  transition: all 0.2s ease-in-out;

  svg {
    position: absolute;
    left: 0.5rem;

    font-size: 1.5rem;
  }

  &:hover {
    cursor: pointer;
    background-color: #111111;
  }
`;

export const LinkedinInfo = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  padding: 0.5rem 2rem 0.5rem 3rem;

  font-size: 1rem;
  text-decoration: none;
  background-color: ${COLORS.linkedinBlue};
  border-radius: 20px;
  color: ${COLORS.white};

  transition: all 0.2s ease-in-out;

  svg {
    position: absolute;
    left: 0.8rem;

    font-size: 1.2rem;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;
