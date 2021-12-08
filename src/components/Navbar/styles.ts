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

type ButtonProps = {
  active?: boolean;
};

export const Button = styled.button<ButtonProps>`
  padding: 0.8rem 2rem;

  font-size: 1rem;
  font-weight: 700;

  background-color: ${(props) => props.active && `${COLORS.blueGrotto}`};
  border-radius: 5rem;

  &:hover {
    cursor: pointer;
  }
`;
