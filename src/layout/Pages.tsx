import { Flex, Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

export default function Pages() {
  return (
    <Flex direction="column" minH="100vh">
      <NavBar />
      <Box flex="1">
        <Outlet />
      </Box>
    </Flex>
  );
}
