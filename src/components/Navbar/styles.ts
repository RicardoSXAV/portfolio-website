import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 6rem;

  background-color: ${COLORS.white};
  border-radius: 20px;
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;

  font-size: 1rem;
  font-weight: 700;

  border-radius: 5rem;
`;
