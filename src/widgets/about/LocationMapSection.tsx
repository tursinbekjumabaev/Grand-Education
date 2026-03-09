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
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  IconMapPin,
  IconNavigation,
  IconSparkles
} from "@tabler/icons-react";

const position: [number, number] = [42.4602, 59.6166];

export default function LocationMapSection() {
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
                Location
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
                Bizdiń jaylasqan ornımız
              </Title>

              <Text c="dimmed" ta="center" maw={620} style={{ lineHeight: 1.75 }}>
                Grand Education orayınıń kartadaǵı ornı. Bizdi tómendegi
                lokaciya boyınsha tabıwıńız múmkin.
              </Text>
            </Stack>
          </motion.div>

          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
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
                  <Stack gap="lg" h="100%">
                    <Group wrap="nowrap" align="flex-start">
                      <ThemeIcon size={54} radius="xl" variant="light" color="blue">
                        <IconMapPin size={24} />
                      </ThemeIcon>

                      <Box>
                        <Text size="sm" c="dimmed">
                          Lokaciya
                        </Text>
                        <Title
                          order={3}
                          style={{
                            fontSize: "24px",
                            letterSpacing: "-0.02em",
                            color: "#0f172a"
                          }}
                        >
                          Nukus, Qaraqalpaqstan
                        </Title>
                      </Box>
                    </Group>

                    <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                      Grand Education orayı studentler ushın qolay jaylasqan
                      orında ornalasqan. Transport, qatnaw hám kúndelikli
                      barıp-keliw ushın da qolay.
                    </Text>

                    <Card
                      radius="20px"
                      p="md"
                      style={{
                        background: "rgba(37,99,235,0.05)",
                        border: "1px solid rgba(37,99,235,0.10)"
                      }}
                    >
                      <Group wrap="nowrap" align="flex-start">
                        <ThemeIcon size={42} radius="xl" variant="light" color="teal">
                          <IconNavigation size={20} />
                        </ThemeIcon>

                        <Box>
                          <Text fw={700}>Grand Education</Text>
                          <Text size="sm" c="dimmed" mt={4}>
                            Nókis qalası, Qaraqalpaqstan Respublikası
                          </Text>
                        </Box>
                      </Group>
                    </Card>

                    <Group grow>
                      <Card
                        radius="18px"
                        p="md"
                        style={{
                          background: "rgba(16,185,129,0.05)",
                          border: "1px solid rgba(16,185,129,0.10)"
                        }}
                      >
                        <Stack gap={2} align="center">
                          <Text fw={800} style={{ fontSize: "22px", color: "#0f172a" }}>
                            24/7
                          </Text>
                          <Text size="sm" c="dimmed" ta="center">
                            Online info
                          </Text>
                        </Stack>
                      </Card>

                      <Card
                        radius="18px"
                        p="md"
                        style={{
                          background: "rgba(249,115,22,0.05)",
                          border: "1px solid rgba(249,115,22,0.10)"
                        }}
                      >
                        <Stack gap={2} align="center">
                          <Text fw={800} style={{ fontSize: "22px", color: "#0f172a" }}>
                            Easy
                          </Text>
                          <Text size="sm" c="dimmed" ta="center">
                            Qatnaw
                          </Text>
                        </Stack>
                      </Card>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                <Card
                  radius="28px"
                  p="md"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)",
                    border: "1px solid rgba(226,232,240,0.95)",
                    boxShadow: "0 16px 35px rgba(15, 23, 42, 0.06)"
                  }}
                >
                  <Box
                    style={{
                      width: "100%",
                      height: "460px",
                      overflow: "hidden",
                      borderRadius: "22px",
                      border: "1px solid rgba(226,232,240,0.9)"
                    }}
                  >
                    <MapContainer
                      center={position}
                      zoom={14}
                      scrollWheelZoom={false}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={position}>
                        <Popup>Grand Education, Nukus</Popup>
                      </Marker>
                    </MapContainer>
                  </Box>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}