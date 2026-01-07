import { Box, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box bg="blue" color="white" padding={4}>
      <HStack>
        <Link to="/">Home</Link>
        <Link to="/jokes">Jokes</Link>
        <Link to="/weather">Weather</Link>
      </HStack>
    </Box>
  );
}
