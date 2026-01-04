import { ProgressCircle, Text } from '@chakra-ui/react';
import useFetch from '../hooks/useFetch';
import { Card } from '@chakra-ui/react';
import type { JokeData } from '../types/jokedata';

export default function Home() {
  const { loading, error, data } = useFetch(
    'https://v2.jokeapi.dev/joke/Any?type=single'
  );

  if (loading) return <LoadingIndicator />;
  if (!data) return <ErrorState message={error} />;

  return <SuccessState data={data} />;
}

type ErrorProps = {
  message: string;
};

function ErrorState({ message }: ErrorProps) {
  return (
    <>
      <Card.Root>
        <Card.Header>
          <Text>Error</Text>
        </Card.Header>
        <Card.Body>
          <Text>{message}</Text>
        </Card.Body>
      </Card.Root>
    </>
  );
}

type SuccessProps = {
  data: JokeData;
};

function SuccessState({ data }: SuccessProps) {
  return (
    <Card.Root>
      <Card.Header>
        <Text>{data.category}</Text>
      </Card.Header>
      <Card.Body>
        <Text>{data.joke}</Text>
      </Card.Body>
    </Card.Root>
  );
}

function LoadingIndicator() {
  return (
    <ProgressCircle.Root value={null}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
      <ProgressCircle.ValueText />
    </ProgressCircle.Root>
  );
}
