import { Alert, Container } from "@mantine/core";

interface Props {
  message?: string;
}

export default function PageError({ message }: Props) {
  return (
    <Container size="lg" py={40}>
      <Alert color="red" title="Qáte">
        {message || "Bir qáte júz berdi"}
      </Alert>
    </Container>
  );
}