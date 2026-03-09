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
  IconChecklist,
  IconSparkles,
  IconTargetArrow,
  IconUserHeart
} from "@tabler/icons-react";

const benefits = [
  {
    title: "Sistemalı tayarlıq",
    description:
      "Hár bir kurs aldınnan oylastırılǵan programma tiykarında ótiledi.",
    icon: IconChecklist,
    color: "blue"
  },
  {
    title: "Jeke qatnas",
    description:
      "Studentlerdiń kúshli hám álsiz jaqları esapqa alınıp islesiledi.",
    icon: IconUserHeart,
    color: "teal"
  },
  {
    title: "Nátijege baǵdarlaw",
    description:
      "Maqset — tek oqıtıw emes, al konkrettı nátijege alıp bariw.",
    icon: IconTargetArrow,
    color: "orange"
  }
];

export default function AboutBenefitsSection() {
  return (
    <Box
      style={{
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: 20,
          left: -80,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(37, 99, 235, 0.07)",
          filter: "blur(50px)"
        }}
      />

      <Box
        style={{
          position: "absolute",
          right: -90,
          bottom: 10,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(16, 185, 129, 0.07)",
          filter: "blur(55px)"
        }}
      />

      <Container size="lg" py={60} style={{ position: "relative", zIndex: 1 }}>
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
                Our Benefits
              </Badge>

              <Title
                order={2}
                ta="center"
                style={{
                  fontSize: "clamp(30px, 4vw, 44px)",
                  letterSpacing: "-0.03em",
                  color: "#0f172a"
                }}
              >
                Nеге bizi tańlaydı?
              </Title>

              <Text c="dimmed" ta="center" maw={620} style={{ lineHeight: 1.75 }}>
                Grand Educationtıń bas ustınlıq tarafları. Biz studentler ushın
                sapalı bilim, individual qatnas hám joqarı nátijege baǵdarlanǵan
                sistemanı usınamız.
              </Text>
            </Stack>
          </motion.div>

          <Grid gutter="xl">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <Grid.Col key={item.title} span={{ base: 12, md: 4 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.12 }}
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
                          top: -20,
                          right: -20,
                          width: 100,
                          height: 100,
                          borderRadius: "50%",
                          background:
                            item.color === "blue"
                              ? "rgba(37,99,235,0.08)"
                              : item.color === "teal"
                              ? "rgba(16,185,129,0.08)"
                              : "rgba(249,115,22,0.08)",
                          filter: "blur(16px)"
                        }}
                      />

                      <Stack gap="md" h="100%" style={{ position: "relative", zIndex: 1 }}>
                        <ThemeIcon
                          size={60}
                          radius="xl"
                          variant="light"
                          color={item.color}
                          style={{
                            boxShadow:
                              item.color === "blue"
                                ? "0 10px 24px rgba(37,99,235,0.15)"
                                : item.color === "teal"
                                ? "0 10px 24px rgba(16,185,129,0.15)"
                                : "0 10px 24px rgba(249,115,22,0.15)"
                          }}
                        >
                          <Icon size={28} />
                        </ThemeIcon>

                        <Title
                          order={3}
                          style={{
                            fontSize: "26px",
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            color: "#0f172a"
                          }}
                        >
                          {item.title}
                        </Title>

                        <Text
                          c="dimmed"
                          style={{
                            lineHeight: 1.8,
                            fontSize: "15px"
                          }}
                        >
                          {item.description}
                        </Text>
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