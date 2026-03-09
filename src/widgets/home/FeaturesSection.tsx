import { Badge, Box, Card, Container, Grid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconBulb,
  IconCalendarTime,
  IconSchool,
  IconSparkles
} from "@tabler/icons-react";

const features = [
  {
    title: "Tájiriybeli ustazlar",
    description:
      "Hár bir pán boyınsha óz salasın jaqsı biletugın, ámeliy tájiriybeli muǵallimler.",
    icon: IconSchool
  },
  {
    title: "Zamanagóy metodika",
    description:
      "Teoriya menen birge test, praktika hám individual islesiw arqalı bilimdi bekitip baramız.",
    icon: IconBulb
  },
  {
    title: "Qolay jadwal",
    description:
      "Oqıwshılar hám abiturientler ushın qulay waqtlar menen jasalǵan sabaq rejesi.",
    icon: IconCalendarTime
  }
];

export default function FeaturesSection() {
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
          top: 20,
          right: -70,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(37, 99, 235, 0.08)",
          filter: "blur(45px)"
        }}
      />

      <Box
        style={{
          position: "absolute",
          left: -60,
          bottom: 0,
          width: 240,
          height: 240,
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
                leftSection={<IconSparkles size={14} />}
              >
                Why Choose Us
              </Badge>

              <Title order={2} ta="center">
                Nеге Grand Education?
              </Title>

              <Text c="dimmed" ta="center" maw={620}>
                Biz bilim сапасын, intizam hám nátijeni birge alıp baramız.
              </Text>
            </Stack>
          </motion.div>

          <Grid gutter="xl">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Grid.Col key={feature.title} span={{ base: 12, md: 4 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.12 }}
                    style={{ height: "100%" }}
                  >
                    <Card
                      radius="xl"
                      padding="xl"
                      h="100%"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.98) 100%)",
                        border: "1px solid rgba(226,232,240,0.95)",
                        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)"
                      }}
                    >
                      <Stack gap="md" h="100%">
                        <ThemeIcon
                          size={56}
                          radius="xl"
                          variant="light"
                          color="blue"
                          style={{
                            boxShadow: "0 8px 20px rgba(37, 99, 235, 0.15)"
                          }}
                        >
                          <Icon size={26} />
                        </ThemeIcon>

                        <Title
                          order={3}
                          style={{
                            fontSize: "24px",
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            color: "#0f172a"
                          }}
                        >
                          {feature.title}
                        </Title>

                        <Text
                          c="dimmed"
                          style={{
                            lineHeight: 1.75,
                            fontSize: "15px"
                          }}
                        >
                          {feature.description}
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