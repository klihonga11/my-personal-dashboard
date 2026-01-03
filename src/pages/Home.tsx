import { Text } from '@chakra-ui/react';
import useFetch from '../hooks/useFetch';
import { Card } from '@chakra-ui/react';

export default function Home() {
  const { loading, error, data } = useFetch('https://v2.jokeapi.dev/joke/Any');

  if (loading) {
    return <Text>Is Loading</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <>
      <Card.Root>
        <Card.Header>
          <Text>{data?.category}</Text>
        </Card.Header>
        <Card.Body>
          <Text>{data?.joke}</Text>
        </Card.Body>
        <Card.Footer />
      </Card.Root>
    </>
  );
}
