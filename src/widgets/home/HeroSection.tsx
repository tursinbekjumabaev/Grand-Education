import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Title
} from "@mantine/core";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  IconArrowRight,
  IconBook2,
  IconInfoCircle,
  IconSparkles,
  IconUsersGroup
} from "@tabler/icons-react";

export default function HeroSection() {
  const { t } = useTranslation();

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
          left: -80,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(37,99,235,0.08)",
          filter: "blur(50px)"
        }}
      />

      <Box
        style={{
          position: "absolute",
          right: -90,
          top: 100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(16,185,129,0.08)",
          filter: "blur(55px)"
        }}
      />

      <Container size="lg" py={110} style={{ position: "relative", zIndex: 1 }}>
        <Stack gap="xl" maw={760}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Badge
              size="lg"
              radius="xl"
              variant="light"
              leftSection={<IconSparkles size={14} />}
              styles={{
                root: {
                  paddingLeft: 14,
                  paddingRight: 14,
                  height: 34,
                  fontWeight: 700
                }
              }}
            >
              {t("home.badge")}
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title
              order={1}
              style={{
                fontSize: "clamp(42px, 7vw, 74px)",
                lineHeight: 1.02,
                letterSpacing: "-0.05em",
                color: "#0f172a",
                maxWidth: 760
              }}
            >
              {t("home.title")}
            </Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <Text
              size="xl"
              c="dimmed"
              style={{
                maxWidth: 650,
                lineHeight: 1.8,
                fontSize: "18px"
              }}
            >
              {t("home.description")}
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Group>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  component={Link}
                  to="/courses"
                  size="lg"
                  radius="xl"
                  rightSection={<IconArrowRight size={18} />}
                  styles={{
                    root: {
                      fontWeight: 700,
                      boxShadow: "0 10px 24px rgba(37,99,235,0.20)"
                    }
                  }}
                >
                  {t("home.coursesButton")}
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  component={Link}
                  to="/about"
                  variant="light"
                  size="lg"
                  radius="xl"
                  leftSection={<IconInfoCircle size={18} />}
                  styles={{
                    root: {
                      fontWeight: 700
                    }
                  }}
                >
                  {t("home.aboutButton")}
                </Button>
              </motion.div>
            </Group>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05 }}
          >
            <Group gap="md" mt="sm">
              <Paper
                radius="xl"
                px="md"
                py="sm"
                style={{
                  background: "rgba(255,255,255,0.78)",
                  border: "1px solid rgba(226,232,240,0.95)",
                  boxShadow: "0 8px 20px rgba(15,23,42,0.05)"
                }}
              >
                <Group gap={8}>
                  <IconUsersGroup size={18} color="#2563eb" />
                  <Text size="sm" fw={600}>
                    1200+ oqıwshı
                  </Text>
                </Group>
              </Paper>

              <Paper
                radius="xl"
                px="md"
                py="sm"
                style={{
                  background: "rgba(255,255,255,0.78)",
                  border: "1px solid rgba(226,232,240,0.95)",
                  boxShadow: "0 8px 20px rgba(15,23,42,0.05)"
                }}
              >
                <Group gap={8}>
                  <IconBook2 size={18} color="#10b981" />
                  <Text size="sm" fw={600}>
                    15+ aktiv kurs
                  </Text>
                </Group>
              </Paper>

              <Paper
                radius="xl"
                px="md"
                py="sm"
                style={{
                  background: "rgba(255,255,255,0.78)",
                  border: "1px solid rgba(226,232,240,0.95)",
                  boxShadow: "0 8px 20px rgba(15,23,42,0.05)"
                }}
              >
                <Group gap={8}>
                  <IconSparkles size={18} color="#f59e0b" />
                  <Text size="sm" fw={600}>
                    92% nátije
                  </Text>
                </Group>
              </Paper>
            </Group>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
}