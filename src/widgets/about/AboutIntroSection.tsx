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
import { motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconBook2,
  IconBulb,
  IconSchool,
  IconSparkles,
  IconTargetArrow
} from "@tabler/icons-react";

export default function AboutIntroSection() {
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
          top: 40,
          left: -70,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(37, 99, 235, 0.08)",
          filter: "blur(45px)"
        }}
      />

      <Box
        style={{
          position: "absolute",
          right: -90,
          top: 120,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(16, 185, 129, 0.08)",
          filter: "blur(55px)"
        }}
      />

      <Container size="lg" py={90} style={{ position: "relative", zIndex: 1 }}>
        <Grid gutter={40} align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <Badge
                  size="lg"
                  radius="xl"
                  variant="light"
                  leftSection={<IconSparkles size={14} />}
                >
                  Biz haqqımızda
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Title
                  order={1}
                  style={{
                    fontSize: "clamp(36px, 5vw, 60px)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.04em",
                    color: "#0f172a",
                    maxWidth: 760
                  }}
                >
                  Grand Education — bilimge aparatuǵın orın
                </Title>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
              >
                <Text
                  size="lg"
                  c="dimmed"
                  style={{
                    maxWidth: 700,
                    lineHeight: 1.8,
                    fontSize: "18px"
                  }}
                >
                  Grand Education Nókistegi oqıwshılar, abiturientler hám til
                  úyreniwshiler ushın zamanaǵa say bilim beriw orayı. Bizdiń bas
                  maqsetimiz — hár bir studenttiń óz potensialın ashıwına járdem
                  beriw.
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              >
                <Text
                  c="dimmed"
                  style={{
                    maxWidth: 700,
                    lineHeight: 1.85,
                    fontSize: "16px"
                  }}
                >
                  Oqıtıw sistemamız teoriyalıq túsinik, ámeliy tapsırmalar, testler
                  hám individual baqlaw menen alıp barıladı. Sol sebepli oqıwshılar
                  tek maǵlıwmat alıp qoymastan, onı ámelde qollanıwdı da úyrenedi.
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.05 }}
              >
                <Group gap="xl" mt="xs">
                  <Group gap={8}>
                    <IconSchool size={18} color="#2563eb" />
                    <Text size="sm" fw={600}>
                      1200+ oqıwshı
                    </Text>
                  </Group>

                  <Group gap={8}>
                    <IconBook2 size={18} color="#0ea5e9" />
                    <Text size="sm" fw={600}>
                      15+ aktiv kurs
                    </Text>
                  </Group>

                  <Group gap={8}>
                    <IconArrowUpRight size={18} color="#10b981" />
                    <Text size="sm" fw={600}>
                      Joqarı nátije
                    </Text>
                  </Group>
                </Group>
              </motion.div>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.65 }}
            >
              <Card
                radius="32px"
                p="xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)",
                  border: "1px solid rgba(226,232,240,0.95)",
                  boxShadow: "0 18px 40px rgba(15, 23, 42, 0.07)",
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
                    background: "rgba(37,99,235,0.08)",
                    filter: "blur(12px)"
                  }}
                />

                <Stack gap="lg" style={{ position: "relative", zIndex: 1 }}>
                  <Group gap="sm" wrap="nowrap">
                    <ThemeIcon size={54} radius="xl" variant="light" color="blue">
                      <IconTargetArrow size={24} />
                    </ThemeIcon>

                    <Box>
                      <Title
                        order={3}
                        style={{
                          fontSize: "26px",
                          letterSpacing: "-0.02em",
                          color: "#0f172a"
                        }}
                      >
                        Bizdiń maqset
                      </Title>
                      <Text c="dimmed" mt={4} style={{ lineHeight: 1.7 }}>
                        Hár bir studentke sapalı bilim, durıs baǵdar hám
                        motivaciya beriw.
                      </Text>
                    </Box>
                  </Group>

                  <Card
                    radius="24px"
                    p="lg"
                    style={{
                      background: "rgba(37,99,235,0.04)",
                      border: "1px solid rgba(37,99,235,0.10)"
                    }}
                  >
                    <Group align="flex-start" wrap="nowrap">
                      <ThemeIcon size={46} radius="xl" variant="light" color="teal">
                        <IconBulb size={22} />
                      </ThemeIcon>

                      <Box>
                        <Title
                          order={4}
                          style={{
                            fontSize: "22px",
                            letterSpacing: "-0.02em",
                            color: "#0f172a"
                          }}
                        >
                          Bizdiń missiya
                        </Title>
                        <Text c="dimmed" mt={6} style={{ lineHeight: 1.75 }}>
                          Bilim arqalı jaslardıń keleshegin kúsheytiw, olarǵa
                          jetiwli platforma usınıw.
                        </Text>
                      </Box>
                    </Group>
                  </Card>

                  <Group grow>
                    <Card
                      radius="20px"
                      p="md"
                      style={{
                        background: "rgba(16,185,129,0.05)",
                        border: "1px solid rgba(16,185,129,0.10)"
                      }}
                    >
                      <Stack gap={2} align="center">
                        <Text fw={800} style={{ fontSize: "24px", color: "#0f172a" }}>
                          25+
                        </Text>
                        <Text size="sm" c="dimmed" ta="center">
                          Tájiriybeli ustaz
                        </Text>
                      </Stack>
                    </Card>

                    <Card
                      radius="20px"
                      p="md"
                      style={{
                        background: "rgba(37,99,235,0.05)",
                        border: "1px solid rgba(37,99,235,0.10)"
                      }}
                    >
                      <Stack gap={2} align="center">
                        <Text fw={800} style={{ fontSize: "24px", color: "#0f172a" }}>
                          92%
                        </Text>
                        <Text size="sm" c="dimmed" ta="center">
                          Nátije kórsetkishi
                        </Text>
                      </Stack>
                    </Card>
                  </Group>
                </Stack>
              </Card>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}