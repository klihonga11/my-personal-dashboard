import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import ApiCard from '../components/ApiCard';

export default function Home() {
  return (
    <Flex bg="red" direction="column" minH="100vh">
      <NavBar />
      <Box flex="1">
        <SimpleGrid columns={3}>
          <ApiCard></ApiCard>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
