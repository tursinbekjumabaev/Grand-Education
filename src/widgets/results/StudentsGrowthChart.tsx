import {
  Badge,
  Box,
  Card,
  Container,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title
} from "@mantine/core";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { monthlyResults } from "@/shared/mock/results";
import { motion } from "framer-motion";
import { IconTrendingUp, IconUsersGroup } from "@tabler/icons-react";

export default function StudentsGrowthChart() {
  const latestStudents = monthlyResults[monthlyResults.length - 1]?.students ?? 0;
  const firstStudents = monthlyResults[0]?.students ?? 0;
  const growth = latestStudents - firstStudents;

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
              background: "rgba(37,99,235,0.08)",
              filter: "blur(20px)"
            }}
          />

          <Stack gap="lg" style={{ position: "relative", zIndex: 1 }}>
            <Group justify="space-between" align="flex-start" wrap="wrap">
              <Stack gap={8}>
                <Group gap="sm">
                  <ThemeIcon size={52} radius="xl" variant="light" color="blue">
                    <IconUsersGroup size={24} />
                  </ThemeIcon>

                  <Box>
                    <Badge
                      radius="xl"
                      variant="light"
                      leftSection={<IconTrendingUp size={12} />}
                    >
                      Student Growth
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
                      Oqıwshılar sanınıń ósiwi
                    </Title>
                  </Box>
                </Group>

                <Text c="dimmed" maw={620} style={{ lineHeight: 1.75 }}>
                  Aylıq dinamika boyınsha studentler sanınıń ósiwin kórsetedi.
                  Bul grafik Grand Education orayındaǵı jalpı ósiw tendenciyasın
                  anıqlaw ushın qollanıladı.
                </Text>
              </Stack>

              <Card
                radius="22px"
                p="md"
                style={{
                  minWidth: 180,
                  background: "rgba(37,99,235,0.05)",
                  border: "1px solid rgba(37,99,235,0.10)"
                }}
              >
                <Stack gap={2} align="flex-start">
                  <Text size="xs" c="dimmed">
                    Jalpı ósiw
                  </Text>
                  <Title
                    order={2}
                    style={{
                      fontSize: "30px",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      color: "#0f172a"
                    }}
                  >
                    +{growth}
                  </Title>
                  <Text size="sm" c="dimmed">
                    Sońǵı kórsetkish: {latestStudents}
                  </Text>
                </Stack>
              </Card>
            </Group>

            <Box
              style={{
                width: "100%",
                height: 380,
                padding: "8px 4px 0"
              }}
            >
              <ResponsiveContainer>
                <LineChart data={monthlyResults}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="rgba(148,163,184,0.25)"
                  />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#64748b", fontSize: 12 }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#64748b", fontSize: 12 }}
                  />
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
                  <Line
                    type="monotone"
                    dataKey="students"
                    stroke="#2563eb"
                    strokeWidth={4}
                    dot={{
                      r: 4,
                      strokeWidth: 2,
                      fill: "#ffffff",
                      stroke: "#2563eb"
                    }}
                    activeDot={{
                      r: 7,
                      fill: "#2563eb",
                      stroke: "#ffffff",
                      strokeWidth: 2
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Stack>
        </Card>
      </motion.div>
    </Container>
  );
}