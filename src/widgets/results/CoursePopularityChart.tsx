import {
  Badge,
  Box,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title
} from "@mantine/core";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { coursePopularity } from "@/shared/mock/results";
import { motion } from "framer-motion";
import { IconChartPie, IconSparkles } from "@tabler/icons-react";

const colors = ["#2563eb", "#14b8a6", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function CoursePopularityChart() {
  const topCourse = [...coursePopularity].sort((a, b) => b.value - a.value)[0];
  const total = coursePopularity.reduce((sum, item) => sum + item.value, 0);

  return (
    <Container size="lg" py={20}>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
      >
        <Card
          radius="28px"
          p="xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)",
            border: "1px solid rgba(226,232,240,0.95)",
            boxShadow: "0 16px 35px rgba(15, 23, 42, 0.06)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <Box
            style={{
              position: "absolute",
              top: -30,
              right: -30,
              width: 130,
              height: 130,
              borderRadius: "50%",
              background: "rgba(139,92,246,0.08)",
              filter: "blur(20px)"
            }}
          />

          <Stack gap="lg" style={{ position: "relative", zIndex: 1 }}>
            <Group justify="space-between" align="flex-start" wrap="wrap">
              <Stack gap={8}>
                <Group gap="sm">
                  <ThemeIcon size={52} radius="xl" variant="light" color="grape">
                    <IconChartPie size={24} />
                  </ThemeIcon>

                  <Box>
                    <Badge
                      radius="xl"
                      variant="light"
                      color="grape"
                      leftSection={<IconSparkles size={12} />}
                    >
                      Course Popularity
                    </Badge>

                    <Title
                      order={3}
                      mt={8}
                      style={{
                        fontSize: "28px",
                        letterSpacing: "-0.02em",
                        color: "#0f172a"
                      }}
                    >
                      Kurslar ommaboplıǵı
                    </Title>
                  </Box>
                </Group>

                <Text c="dimmed" maw={620} style={{ lineHeight: 1.75 }}>
                  Bul diagramma studentler arasynda eń kóp tańlanǵan kurslardı
                  kórsetedi. Kurslarga bolǵan qızıǵıw deńgeyin analiz qılıw
                  ushın qollanıladı.
                </Text>
              </Stack>

              <Card
                radius="22px"
                p="md"
                style={{
                  minWidth: 200,
                  background: "rgba(139,92,246,0.05)",
                  border: "1px solid rgba(139,92,246,0.10)"
                }}
              >
                <Stack gap={2} align="flex-start">
                  <Text size="xs" c="dimmed">
                    Eń ommabop kurs
                  </Text>
                  <Title
                    order={2}
                    style={{
                      fontSize: "28px",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      color: "#0f172a"
                    }}
                  >
                    {topCourse?.name}
                  </Title>
                  <Text size="sm" c="dimmed">
                    Ulesi: {topCourse?.value}%
                  </Text>
                </Stack>
              </Card>
            </Group>

            <Grid gutter="xl" align="center">
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Box
                  style={{
                    width: "100%",
                    height: 380
                  }}
                >
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={coursePopularity}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={85}
                        outerRadius={125}
                        paddingAngle={4}
                        stroke="rgba(255,255,255,0.9)"
                        strokeWidth={3}
                      >
                        {coursePopularity.map((item, index) => (
                          <Cell
                            key={item.name}
                            fill={colors[index % colors.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          borderRadius: "16px",
                          border: "1px solid rgba(226,232,240,0.95)",
                          boxShadow: "0 12px 24px rgba(15,23,42,0.10)",
                          background: "rgba(255,255,255,0.98)"
                        }}
                        labelStyle={{
                          color: "#0f172a",
                          fontWeight: 700,
                          marginBottom: 6
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 5 }}>
                <Stack gap="md">
                  <Card
                    radius="24px"
                    p="lg"
                    style={{
                      background: "rgba(37,99,235,0.04)",
                      border: "1px solid rgba(37,99,235,0.10)"
                    }}
                  >
                    <Stack gap={2}>
                      <Text size="xs" c="dimmed">
                        Jámı ulıwma kórsetkish
                      </Text>
                      <Title
                        order={2}
                        style={{
                          fontSize: "32px",
                          letterSpacing: "-0.03em",
                          color: "#0f172a"
                        }}
                      >
                        {total}%
                      </Title>
                    </Stack>
                  </Card>

                  {coursePopularity.map((item, index) => (
                    <Card
                      key={item.name}
                      radius="20px"
                      p="md"
                      style={{
                        background: "rgba(255,255,255,0.82)",
                        border: "1px solid rgba(226,232,240,0.95)"
                      }}
                    >
                      <Group justify="space-between" align="center">
                        <Group gap="sm">
                          <Box
                            style={{
                              width: 14,
                              height: 14,
                              borderRadius: "50%",
                              background: colors[index % colors.length]
                            }}
                          />
                          <Text fw={600}>{item.name}</Text>
                        </Group>

                        <Text fw={700} c="dimmed">
                          {item.value}%
                        </Text>
                      </Group>
                    </Card>
                  ))}
                </Stack>
              </Grid.Col>
            </Grid>
          </Stack>
        </Card>
      </motion.div>
    </Container>
  );
}