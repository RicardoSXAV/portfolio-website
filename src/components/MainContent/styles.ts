import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Box = styled.div`
  width: 100%;
  height: 80%;
  max-height: 80%;

  padding: 2rem 0;

  background-color: ${COLORS.white};
  border-radius: 20px;
`;

export const Overflow = styled.div`
  max-height: 100%;
  padding: 0 2rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.navyBlue};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${COLORS.blueGrotto};
    border-radius: 4px;
  }
`;
