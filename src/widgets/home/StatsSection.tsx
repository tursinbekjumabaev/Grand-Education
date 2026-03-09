import { Badge, Box, Card, Container, Grid, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { statsMock } from "@/shared/mock/stats";
import { useTranslation } from "react-i18next";
import { IconTrendingUp } from "@tabler/icons-react";

export default function StatsSection() {
  const { t } = useTranslation();

  return (
    <Box
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: 20,
        paddingBottom: 20
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: 40,
          left: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(37, 99, 235, 0.08)",
          filter: "blur(40px)"
        }}
      />

      <Box
        style={{
          position: "absolute",
          right: -80,
          bottom: 6,
          width: 60,
          height: 260,
          borderRadius: "50%",
          background: "rgba(16, 185, 129, 0.08)",
          filter: "blur(50px)"
        }}
      />

      <Container size="lg" py={50} style={{ position: "relative", zIndex: 1 }}>
        <Stack gap="xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
          >
            <Stack gap="sm" align="center">
              <Badge
                size="lg"
                radius="xl"
                variant="light"
                leftSection={<IconTrendingUp size={14} />}
              >
                Grand Education Stats
              </Badge>

              <Title order={2} ta="center">
                {t("home.statsTitle")}
              </Title>

              <Text c="dimmed" ta="center" maw={620}>
                {t("home.statsDescription")}
              </Text>
            </Stack>
          </motion.div>

          <Grid gutter="xl">
            {statsMock.map((item, index) => (
              <Grid.Col key={item.id} span={{ base: 12, xs: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 26, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  style={{ height: "100%" }}
                >
                  <Card
                    radius="xl"
                    padding="xl"
                    h="100%"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)",
                      border: "1px solid rgba(226,232,240,0.95)",
                      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)"
                    }}
                  >
                    <Stack gap="sm" align="center" justify="center" h="100%">
                      <Box
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(59,130,246,0.18))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                          color: "#2563eb",
                          fontSize: 18
                        }}
                      >
                        {index + 1}
                      </Box>

                      <Title
                        order={2}
                        ta="center"
                        style={{
                          fontSize: "clamp(28px, 4vw, 40px)",
                          lineHeight: 1,
                          color: "#0f172a",
                          letterSpacing: "-0.03em"
                        }}
                      >
                        {item.value}
                      </Title>

                      <Text
                        c="dimmed"
                        ta="center"
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.6
                        }}
                      >
                        {item.label}
                      </Text>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}