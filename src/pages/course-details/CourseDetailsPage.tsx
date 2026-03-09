import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  List,
  Stack,
  Text,
  Title
} from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import AppLayout from "@/widgets/layout/AppLayout";
import PageLoader from "@/shared/ui/PageLoader";
import PageError from "@/shared/ui/PageError";
import { useCourseDetailsQuery } from "@/entities/course/hooks/useCourseDetailsQuery";
import EnrollCourseForm from "@/features/enroll-course/ui/EnrollCourseForm";
import NotFoundState from "@/entities/course/ui/NotFoundState";

export default function CourseDetailsPage() {
  const { slug = "" } = useParams();
  const { data, isLoading, isError } = useCourseDetailsQuery(slug);

  if (isLoading) {
    return (
      <AppLayout>
        <PageLoader />
      </AppLayout>
    );
  }

  if (isError) {
    return (
      <AppLayout>
        <PageError message="Kurs maǵlıwmatın júklewde qáte boldı" />
      </AppLayout>
    );
  }

  if (!data) {
    return (
      <AppLayout>
        <NotFoundState
          title="Kurs tabılmadı"
          description="Bul slug boyınsha hesh qanday kurs joq."
        />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <Container size="lg" py={80}>
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap="lg">
              <div>
                <Group mb="sm">
                  <Badge variant="light">{data.level}</Badge>
                  <Badge color="green" variant="light">
                    {data.language}
                  </Badge>
                </Group>

                <Title order={1}>{data.title}</Title>

                <Text mt="md" size="lg" c="dimmed">
                  {data.description}
                </Text>
              </div>

              <Card withBorder radius="md" padding="lg">
                <Stack gap="sm">
                  <Title order={3}>Kurs haqqında</Title>
                  <Text>
                    Bul kurs studentlerdi teoriyalıq hám ámeliy jaqtan kúsheytip,
                    exam hám kiris testlerine tayarlawǵa qaratılǵan.
                  </Text>
                  <Text>
                    Sabaklar túsinikli, basqıshpa-basqısh ótiledi hám úy tapsırmaları
                    arqalı bekitiledi.
                  </Text>
                </Stack>
              </Card>

              <Card withBorder radius="md" padding="lg">
                <Stack gap="sm">
                  <Title order={3}>Kimler ushın</Title>
                  <List spacing="xs">
                    <List.Item>Abiturientler ushın</List.Item>
                    <List.Item>
                      Óz bilimlerin kúsheytkisi keletuǵın oqıwshılar ushın
                    </List.Item>
                    <List.Item>
                      Test hám examǵa jetiwli tayarlıq kóriw ushın
                    </List.Item>
                  </List>
                </Stack>
              </Card>

              <Card withBorder radius="md" padding="lg">
                <Stack gap="sm">
                  <Title order={3}>Programma</Title>
                  <List spacing="xs">
                    <List.Item>Negizgi teoriyalıq bólimler</List.Item>
                    <List.Item>Ámeliy tapsırmalar hám misallar</List.Item>
                    <List.Item>Hápte sayın mini-testler</List.Item>
                    <List.Item>Qáteliklerdi analiz qılıw</List.Item>
                    <List.Item>Final sınaq sabakları</List.Item>
                  </List>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="lg">
              <Card withBorder radius="md" padding="lg">
                <Stack gap="sm">
                  <Title order={3}>Qısqasha maǵlıwmat</Title>

                  <Text>
                    <b>Muǵallim:</b> {data.teacher}
                  </Text>
                  <Text>
                    <b>Uzaqlığı:</b> {data.duration}
                  </Text>
                  <Text>
                    <b>Til:</b> {data.language}
                  </Text>
                  <Text>
                    <b>Sabak:</b> Háptege {data.lessonsPerWeek} ret
                  </Text>
                  <Text>
                    <b>Baǵası:</b> {data.price.toLocaleString()} so'm
                  </Text>

                  <Button
                    component={Link}
                    to="/courses"
                    variant="light"
                    fullWidth
                    mt="sm"
                  >
                    Barlıq kurslar
                  </Button>
                </Stack>
              </Card>

              <Card withBorder radius="md" padding="lg">
                <Stack gap="md">
                  <Title order={3}>Kursqa jazılıw</Title>
                  <EnrollCourseForm courseTitle={data.title} />
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </AppLayout>
  );
}