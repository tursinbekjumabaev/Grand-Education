import {
  Anchor,
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
  IconAt,
  IconBrandInstagram,
  IconBrandTelegram,
  IconMapPin,
  IconPhone,
  IconSparkles
} from "@tabler/icons-react";
import { contactInfo } from "@/shared/mock/contact";

export default function ContactSection() {
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
          top: 30,
          left: -70,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(37, 99, 235, 0.07)",
          filter: "blur(45px)"
        }}
      />

      <Box
        style={{
          position: "absolute",
          right: -90,
          bottom: 0,
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
                Contact Us
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
                Baylanıs maǵlıwmatları
              </Title>

              <Text c="dimmed" ta="center" maw={620} style={{ lineHeight: 1.75 }}>
                Biz benen baylanısıw ushın tómendegi maǵlıwmatlardı qollanıń.
                Sorawlarıńız bolsa, Telegram, Instagram yaki telefon arqalı
                baylanısıwıńız múmkin.
              </Text>
            </Stack>
          </motion.div>

          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
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
                    boxShadow: "0 16px 35px rgba(15, 23, 42, 0.06)"
                  }}
                >
                  <Stack gap="lg">
                    <Title
                      order={3}
                      style={{
                        fontSize: "28px",
                        letterSpacing: "-0.02em",
                        color: "#0f172a"
                      }}
                    >
                      Biz benen baylanısıń
                    </Title>

                    <Group align="flex-start" wrap="nowrap">
                      <ThemeIcon size={52} radius="xl" variant="light" color="blue">
                        <IconPhone size={24} />
                      </ThemeIcon>
                      <Box>
                        <Text size="sm" c="dimmed">
                          Telefon
                        </Text>
                        <Text fw={700} size="lg">
                          {contactInfo.phone}
                        </Text>
                      </Box>
                    </Group>

                    <Group align="flex-start" wrap="nowrap">
                      <ThemeIcon size={52} radius="xl" variant="light" color="grape">
                        <IconAt size={24} />
                      </ThemeIcon>
                      <Box>
                        <Text size="sm" c="dimmed">
                          Email
                        </Text>
                        <Text fw={700} size="lg">
                          {contactInfo.email}
                        </Text>
                      </Box>
                    </Group>

                    <Group align="flex-start" wrap="nowrap">
                      <ThemeIcon size={52} radius="xl" variant="light" color="teal">
                        <IconMapPin size={24} />
                      </ThemeIcon>
                      <Box>
                        <Text size="sm" c="dimmed">
                          Manzil
                        </Text>
                        <Text fw={700} size="lg">
                          {contactInfo.address}
                        </Text>
                      </Box>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.08 }}
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
                    boxShadow: "0 16px 35px rgba(15, 23, 42, 0.06)"
                  }}
                >
                  <Stack gap="lg">
                    <Title
                      order={3}
                      style={{
                        fontSize: "28px",
                        letterSpacing: "-0.02em",
                        color: "#0f172a"
                      }}
                    >
                      Social tarmaqlar
                    </Title>

                    <Anchor
                      href={contactInfo.telegram}
                      target="_blank"
                      underline="never"
                      style={{ color: "inherit" }}
                    >
                      <Card
                        radius="20px"
                        p="md"
                        style={{
                          background: "rgba(37,99,235,0.05)",
                          border: "1px solid rgba(37,99,235,0.10)",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <Group wrap="nowrap">
                          <ThemeIcon size={46} radius="xl" variant="light" color="blue">
                            <IconBrandTelegram size={22} />
                          </ThemeIcon>

                          <Box>
                            <Text fw={700}>Telegram</Text>
                            <Text size="sm" c="dimmed">
                              Tikeleý jazıw ushın resmi Telegram kanalımız
                            </Text>
                          </Box>
                        </Group>
                      </Card>
                    </Anchor>

                    <Anchor
                      href={contactInfo.instagram}
                      target="_blank"
                      underline="never"
                      style={{ color: "inherit" }}
                    >
                      <Card
                        radius="20px"
                        p="md"
                        style={{
                          background: "rgba(225,29,72,0.05)",
                          border: "1px solid rgba(225,29,72,0.10)",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <Group wrap="nowrap">
                          <ThemeIcon size={46} radius="xl" variant="light" color="pink">
                            <IconBrandInstagram size={22} />
                          </ThemeIcon>

                          <Box>
                            <Text fw={700}>Instagram</Text>
                            <Text size="sm" c="dimmed">
                              Jańalıqlar, kurslar hám daily content ushın bizi kúzetiń
                            </Text>
                          </Box>
                        </Group>
                      </Card>
                    </Anchor>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}