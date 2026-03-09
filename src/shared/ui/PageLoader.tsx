import { Center, Loader } from "@mantine/core";

export default function PageLoader() {
  return (
    <Center py={80}>
      <Loader size="lg" />
    </Center>
  );
}