import { Box, Overflow } from "./styles";

const MainContent: React.FC = ({ children }) => {
  return (
    <Box>
      <Overflow>{children}</Overflow>
    </Box>
  );
};

export default MainContent;
