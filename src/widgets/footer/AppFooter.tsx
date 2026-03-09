import {
  ActionIcon,
  Box,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSchool
} from "@tabler/icons-react";

export default function AppFooter() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: "80px",
        background:
          "linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(241,245,249,1) 100%)",
        borderTop: "1px solid rgba(226,232,240,0.9)"
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: -60,
          left: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(37,99,235,0.08)",
          filter: "blur(50px)"
        }}
      />

      <Box
        style={{
          position: "absolute",
          right: -80,
          bottom: -40,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(16,185,129,0.08)",
          filter: "blur(55px)"
        }}
      />

      <Container size="lg" py={56} style={{ position: "relative", zIndex: 1 }}>
        <Stack gap="xl">
          <Group justify="space-between" align="flex-start" wrap="wrap">
            <Stack gap="md" maw={340}>
              <Group gap="sm" wrap="nowrap">
                <ThemeIcon size={50} radius="xl" variant="light" color="blue">
                  <IconSchool size={24} />
                </ThemeIcon>

                <Box>
                  <Title
                    order={3}
                    style={{
                      fontSize: "28px",
                      lineHeight: 1.1,
                      letterSpacing: "-0.03em",
                      color: "#0f172a"
                    }}
                  >
                    Grand Education
                  </Title>
                  <Text size="sm" c="dimmed" mt={4}>
                    Education Center
                  </Text>
                </Box>
              </Group>

              <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                Grand Education — Nókistegi zamanagóy tayarlıq orayı. Abiturientler,
                oqıwshılar hám til úyreniwshiler ushın sapalı bilim platforması.
              </Text>
            </Stack>

            <Group align="flex-start" gap={60} wrap="wrap">
              <Stack gap="sm">
                <Text fw={700} size="lg" c="dark">
                  Navigation
                </Text>

                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#475569",
                    fontWeight: 500
                  }}
                >
                  {t("nav.home")}
                </Link>

                <Link
                  to="/courses"
                  style={{
                    textDecoration: "none",
                    color: "#475569",
                    fontWeight: 500
                  }}
                >
                  {t("nav.courses")}
                </Link>

                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "#475569",
                    fontWeight: 500
                  }}
                >
                  {t("nav.about")}
                </Link>

                <Link
                  to="/results"
                  style={{
                    textDecoration: "none",
                    color: "#475569",
                    fontWeight: 500
                  }}
                >
                  {t("nav.results")}
                </Link>
              </Stack>

              <Stack gap="sm">
                <Text fw={700} size="lg" c="dark">
                  Contact
                </Text>

                <Group gap={8} wrap="nowrap">
                  <IconPhone size={16} color="#64748b" />
                  <Text c="dimmed" size="sm">
                    +998 90 123 45 67
                  </Text>
                </Group>

                <Group gap={8} wrap="nowrap">
                  <IconMail size={16} color="#64748b" />
                  <Text c="dimmed" size="sm">
                    grandeducation@gmail.com
                  </Text>
                </Group>

                <Group gap={8} wrap="nowrap">
                  <IconMapPin size={16} color="#64748b" />
                  <Text c="dimmed" size="sm">
                    Nukus, Qaraqalpaqstan
                  </Text>
                </Group>
              </Stack>

              <Stack gap="sm">
                <Text fw={700} size="lg" c="dark">
                  Social
                </Text>

                <Group gap="sm">
                  <ActionIcon
                    component="a"
                    href="https://t.me/grandeducation"
                    target="_blank"
                    radius="xl"
                    size={42}
                    variant="light"
                    color="blue"
                    aria-label="Telegram"
                  >
                    <IconBrandTelegram size={20} />
                  </ActionIcon>

                  <ActionIcon
                    component="a"
                    href="https://instagram.com/grandeducation"
                    target="_blank"
                    radius="xl"
                    size={42}
                    variant="light"
                    color="pink"
                    aria-label="Instagram"
                  >
                    <IconBrandInstagram size={20} />
                  </ActionIcon>
                </Group>
              </Stack>
            </Group>
          </Group>

          <Divider color="rgba(148,163,184,0.25)" />

          <Group justify="space-between" align="center" wrap="wrap">
            <Text size="sm" c="dimmed">
              {t("footer.rights")}
            </Text>

            <Text size="sm" c="dimmed">
              Built for modern education
            </Text>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}