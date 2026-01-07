import { ProgressCircle, Text } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import useFetch from '../hooks/useFetch';

export default function ApiCard() {
  const { loading, error, data } = useFetch(
    'https://v2.jokeapi.dev/joke/Any?type=single'
  );

  if (loading)
    return <CardLayout title="Loading" children={<LoadingIndicator />} />;
  if (!data)
    return <CardLayout title="Error" children={<Text>{error}</Text>} />;

  return (
    <CardLayout title={data.category} children={<Text>{data.joke}</Text>} />
  );
}

function CardLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card.Root size="md" flex={3} margin={8}>
      <Card.Header>
        <Text>{title}</Text>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
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
