import {
  ActionIcon,
  Badge,
  Box,
  Burger,
  Container,
  Drawer,
  Group,
  Menu,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Tooltip
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  IconBook2,
  IconChartBar,
  IconChevronDown,
  IconHome2,
  IconInfoCircle,
  IconLanguage,
  IconSchool,
  IconSparkles
} from "@tabler/icons-react";
import { setAppLanguage } from "@/shared/config/i18n";

export default function AppHeader() {
  const [opened, { close, toggle }] = useDisclosure(false);
  const { t } = useTranslation();
  const location = useLocation();
  const [scroll] = useWindowScroll();

  const isScrolled = scroll.y > 10;

  const links = [
    { to: "/", label: t("nav.home"), icon: IconHome2 },
    { to: "/courses", label: t("nav.courses"), icon: IconBook2 },
    { to: "/about", label: t("nav.about"), icon: IconInfoCircle },
    { to: "/results", label: t("nav.results"), icon: IconChartBar }
  ];

  const desktopNav = (
    <Group gap={8}>
      {links.map((link, index) => {
        const isActive = location.pathname === link.to;
        const Icon = link.icon;

        return (
          <motion.div
            key={link.to}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
          >
            <Box
              component={NavLink}
              to={link.to}
              style={{
                textDecoration: "none",
                padding: "11px 16px",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "14px",
                color: isActive ? "#2563eb" : "#334155",
                background: isActive
                  ? "rgba(37, 99, 235, 0.10)"
                  : "transparent",
                border: isActive
                  ? "1px solid rgba(37,99,235,0.15)"
                  : "1px solid transparent",
                transition: "all 0.22s ease",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Icon size={17} />
              <span>{link.label}</span>
            </Box>
          </motion.div>
        );
      })}
    </Group>
  );

  const mobileNav = (
    <Stack gap="sm">
      {links.map((link) => {
        const isActive = location.pathname === link.to;
        const Icon = link.icon;

        return (
          <Box
            key={link.to}
            component={NavLink}
            to={link.to}
            onClick={close}
            style={{
              textDecoration: "none",
              padding: "14px 16px",
              borderRadius: "18px",
              fontWeight: 700,
              fontSize: "15px",
              color: isActive ? "#2563eb" : "#334155",
              background: isActive
                ? "rgba(37, 99, 235, 0.10)"
                : "rgba(248,250,252,0.75)",
              border: isActive
                ? "1px solid rgba(37,99,235,0.15)"
                : "1px solid rgba(226,232,240,0.9)",
              transition: "all 0.22s ease",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <Icon size={18} />
            <span>{link.label}</span>
          </Box>
        );
      })}
    </Stack>
  );

  return (
    <>
      <Paper
        radius={0}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 200,
          borderBottom: isScrolled
            ? "1px solid rgba(226,232,240,0.95)"
            : "1px solid rgba(226,232,240,0.65)",
          background: "rgba(255,255,255,0.78)",
          backdropFilter: "blur(18px)",
          boxShadow: isScrolled
            ? "0 12px 30px rgba(15,23,42,0.06)"
            : "0 4px 12px rgba(15,23,42,0.03)",
          transition: "all 0.25s ease"
        }}
      >
        <Container size="lg">
          <Group justify="space-between" h={84} wrap="nowrap">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#111827",
                  minWidth: "fit-content"
                }}
              >
                <Group gap="sm" wrap="nowrap">
                  <ThemeIcon
                    size={48}
                    radius="xl"
                    variant="light"
                    color="blue"
                    style={{
                      boxShadow: "0 10px 24px rgba(37,99,235,0.18)"
                    }}
                  >
                    <IconSchool size={24} />
                  </ThemeIcon>

                  <Stack gap={2}>
                    <Group gap={8}>
                      <Text
                        fw={900}
                        size="26px"
                        style={{
                          lineHeight: 1,
                          letterSpacing: "-0.04em",
                          color: "#0f172a"
                        }}
                      >
                        Grand Education
                      </Text>

                      <Badge
                        radius="xl"
                        variant="light"
                        size="sm"
                        leftSection={<IconSparkles size={10} />}
                      >
                        Pro
                      </Badge>
                    </Group>

                    <Text size="12px" c="dimmed">
                      Education Center
                    </Text>
                  </Stack>
                </Group>
              </Link>
            </motion.div>

            <Group gap="md" visibleFrom="md" wrap="nowrap">
              {desktopNav}

              <Menu
                shadow="lg"
                width={190}
                position="bottom-end"
                radius="lg"
                offset={10}
              >
                <Menu.Target>
                  <Tooltip label={t("language.label")} withArrow>
                    <ActionIcon
                      size={44}
                      radius="xl"
                      variant="light"
                      color="gray"
                      aria-label={t("language.label")}
                      style={{
                        border: "1px solid rgba(226,232,240,0.95)"
                      }}
                    >
                      <IconLanguage size={20} />
                    </ActionIcon>
                  </Tooltip>
                </Menu.Target>

                <Menu.Dropdown
                  style={{
                    borderRadius: "16px",
                    border: "1px solid rgba(226,232,240,0.95)",
                    boxShadow: "0 18px 35px rgba(15,23,42,0.08)"
                  }}
                >
                  <Menu.Label>{t("language.label")}</Menu.Label>

                  <Menu.Item
                    leftSection={<IconChevronDown size={14} />}
                    onClick={() => setAppLanguage("kaa")}
                  >
                    Qaraqalpaq
                  </Menu.Item>

                  <Menu.Item
                    leftSection={<IconChevronDown size={14} />}
                    onClick={() => setAppLanguage("uz")}
                  >
                    O‘zbek
                  </Menu.Item>

                  <Menu.Item
                    leftSection={<IconChevronDown size={14} />}
                    onClick={() => setAppLanguage("ru")}
                  >
                    Русский
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>

            <ActionIcon
              hiddenFrom="md"
              variant="light"
              color="gray"
              size={44}
              radius="xl"
              onClick={toggle}
              aria-label="Open menu"
              style={{
                border: "1px solid rgba(226,232,240,0.95)"
              }}
            >
              <Burger opened={opened} aria-label="Toggle menu" />
            </ActionIcon>
          </Group>
        </Container>
      </Paper>

      <Drawer
        opened={opened}
        onClose={close}
        padding="lg"
        size="82%"
        hiddenFrom="md"
        radius="0"
        transitionProps={{ transition: "slide-right", duration: 240 }}
        styles={{
          content: {
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)"
          }
        }}
      >
        <Stack gap="lg">
          <Group gap="sm" wrap="nowrap">
            <ThemeIcon
              size={46}
              radius="xl"
              variant="light"
              color="blue"
              style={{
                boxShadow: "0 10px 24px rgba(37,99,235,0.18)"
              }}
            >
              <IconSchool size={22} />
            </ThemeIcon>

            <Stack gap={2}>
              <Text
                fw={900}
                size="24px"
                style={{
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "#0f172a"
                }}
              >
                Grand Education
              </Text>
              <Text size="12px" c="dimmed">
                Education Center
              </Text>
            </Stack>
          </Group>

          {mobileNav}

          <Menu shadow="lg" width={190} position="bottom-start" radius="lg">
            <Menu.Target>
              <ActionIcon
                size={46}
                radius="xl"
                variant="light"
                color="gray"
                aria-label={t("language.label")}
                style={{
                  border: "1px solid rgba(226,232,240,0.95)"
                }}
              >
                <IconLanguage size={20} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown
              style={{
                borderRadius: "16px",
                border: "1px solid rgba(226,232,240,0.95)",
                boxShadow: "0 18px 35px rgba(15,23,42,0.08)"
              }}
            >
              <Menu.Label>{t("language.label")}</Menu.Label>

              <Menu.Item
                onClick={() => {
                  setAppLanguage("kaa");
                  close();
                }}
              >
                Qaraqalpaq
              </Menu.Item>

              <Menu.Item
                onClick={() => {
                  setAppLanguage("uz");
                  close();
                }}
              >
                O‘zbek
              </Menu.Item>

              <Menu.Item
                onClick={() => {
                  setAppLanguage("ru");
                  close();
                }}
              >
                Русский
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Stack>
      </Drawer>
    </>
  );
}