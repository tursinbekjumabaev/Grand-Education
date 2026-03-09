import { Button, Container, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

interface Props {
  title?: string;
  description?: string;
}

export default function NotFoundState({ title, description }: Props) {
  return (
    <Container size="sm" py={80}>
      <Stack align="center" gap="md">
        <Title order={2}>{title || "Tabılmadı"}</Title>
        <Text c="dimmed" ta="center">
          {description || "Soralıp atırǵan maǵlıwmat tabılmadı."}
        </Text>
        <Button component={Link} to="/courses">
          Kurslarǵa qaytıw
        </Button>
      </Stack>
    </Container>
  );
}