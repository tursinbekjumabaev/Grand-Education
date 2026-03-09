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
import { IconArrowRight, IconPhone } from "@tabler/icons-react";

export default function CtaSection() {
  const { t } = useTranslation();

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
          right: -80,
          bottom: 5,
          width: 160,
          height: 260,
          borderRadius: "50%",
          background: "rgba(16,185,129,0.10)",
          filter: "blur(20px)"
        }}
      />

      <Container size="lg" py={70} style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            radius="xl"
            p={40}
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(16,185,129,0.08))",
              border: "1px solid rgba(226,232,240,0.9)",
              boxShadow: "0 20px 40px rgba(15,23,42,0.06)"
            }}
          >
            <Stack gap="lg" align="center">
              <Badge radius="xl" size="lg">
                Grand Education
              </Badge>

              <Title
                order={2}
                ta="center"
                style={{
                  fontSize: "clamp(28px,4vw,38px)",
                  letterSpacing: "-0.02em"
                }}
              >
                {t("home.ctaTitle")}
              </Title>

              <Text
                c="dimmed"
                ta="center"
                maw={650}
                style={{ lineHeight: 1.7 }}
              >
                {t("home.ctaDescription")}
              </Text>

              <Group mt="sm">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Button
                    component={Link}
                    to="/courses"
                    size="lg"
                    radius="xl"
                    rightSection={<IconArrowRight size={18} />}
                  >
                    {t("home.ctaCourses")}
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Button
                    component={Link}
                    to="/about"
                    size="lg"
                    radius="xl"
                    variant="light"
                    leftSection={<IconPhone size={18} />}
                  >
                    {t("home.ctaContact")}
                  </Button>
                </motion.div>
              </Group>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}