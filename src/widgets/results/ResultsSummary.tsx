import {
  Badge,
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Text,
  ThemeIcon,
  Title
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconChartBar,
  IconChartHistogram,
  IconPresentationAnalytics,
  IconSparkles,
  IconTrendingUp
} from "@tabler/icons-react";
import { summaryStats } from "@/shared/mock/results";

const icons = [
  IconChartBar,
  IconTrendingUp,
  IconPresentationAnalytics,
  IconChartHistogram
];

const colors = ["blue", "teal", "grape", "orange"] as const;

export default function ResultsSummary() {
  return (
    <Box
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(255,255,255,1) 100%)"
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: 20,
          left: -70,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(37, 99, 235, 0.07)",
          filter: "blur(45px)"
        }}
      />

      <Box
        style={{
          position: "absolute",
          right: -90,
          top: 80,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(16, 185, 129, 0.07)",
          filter: "blur(55px)"
        }}
      />

      <Container size="lg" py={70} style={{ position: "relative", zIndex: 1 }}>
        <Stack gap="xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
          >
            <Stack gap="sm" align="center">
              <Badge
                size="lg"
                radius="xl"
                variant="light"
                leftSection={<IconSparkles size={14} />}
              >
                Analytics Overview
              </Badge>

              <Title
                order={1}
                ta="center"
                style={{
                  fontSize: "clamp(34px, 5vw, 56px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  color: "#0f172a"
                }}
              >
                Nátijeler hám statistika
              </Title>

              <Text
                c="dimmed"
                ta="center"
                maw={680}
                style={{
                  lineHeight: 1.8,
                  fontSize: "17px"
                }}
              >
                Grand Education orayınıń qısqasha analytics kórinisi. Bul bólimde
                oqıwshılar, arızalar hám akademiyalıq kórsetkishler boyınsha
                tiykarǵı maǵlıwmatlar kórsetiledi.
              </Text>
            </Stack>
          </motion.div>

          <Grid gutter="xl">
            {summaryStats.map((item, index) => {
              const Icon = icons[index % icons.length];
              const color = colors[index % colors.length];

              return (
                <Grid.Col key={item.id} span={{ base: 12, xs: 6, md: 3 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    style={{ height: "100%" }}
                  >
                    <Card
                      radius="28px"
                      p="xl"
                      h="100%"
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
                          top: -18,
                          right: -18,
                          width: 90,
                          height: 90,
                          borderRadius: "50%",
                          background:
                            color === "blue"
                              ? "rgba(37,99,235,0.08)"
                              : color === "teal"
                              ? "rgba(16,185,129,0.08)"
                              : color === "grape"
                              ? "rgba(147,51,234,0.08)"
                              : "rgba(249,115,22,0.08)",
                          filter: "blur(16px)"
                        }}
                      />

                      <Stack gap="lg" h="100%" style={{ position: "relative", zIndex: 1 }}>
                        <ThemeIcon
                          size={60}
                          radius="xl"
                          variant="light"
                          color={color}
                          style={{
                            boxShadow:
                              color === "blue"
                                ? "0 10px 24px rgba(37,99,235,0.15)"
                                : color === "teal"
                                ? "0 10px 24px rgba(16,185,129,0.15)"
                                : color === "grape"
                                ? "0 10px 24px rgba(147,51,234,0.15)"
                                : "0 10px 24px rgba(249,115,22,0.15)"
                          }}
                        >
                          <Icon size={28} />
                        </ThemeIcon>

                        <Stack gap={6}>
                          <Title
                            order={2}
                            style={{
                              fontSize: "clamp(30px, 4vw, 42px)",
                              lineHeight: 1,
                              letterSpacing: "-0.03em",
                              color: "#0f172a"
                            }}
                          >
                            {item.value}
                          </Title>

                          <Text
                            c="dimmed"
                            style={{
                              lineHeight: 1.7,
                              fontSize: "15px"
                            }}
                          >
                            {item.label}
                          </Text>
                        </Stack>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid.Col>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}