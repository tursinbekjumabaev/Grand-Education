import { Button, Container, Stack, Text, Title } from "@mantine/core";

interface Props {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  onAction
}: Props) {
  return (
    <Container size="sm" py={60}>
      <Stack align="center" gap="md">
        <Title order={3}>{title || "Maǵlıwmat joq"}</Title>
        <Text ta="center" c="dimmed">
          {description || "Hazirshe hesh nárse tabılmadı."}
        </Text>

        {actionLabel && onAction && (
          <Button variant="light" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </Stack>
    </Container>
  );
}