import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconBook2,
  IconClock,
  IconLanguage,
  IconUser,
  IconSparkles
} from "@tabler/icons-react";

import type { Course } from "@/entities/course/model/types";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.015 }}
      transition={{ duration: 0.25 }}
      style={{ height: "100%" }}
    >
      <Card
        radius="24px"
        padding="xl"
        withBorder
        h="100%"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)",
          border: "1px solid rgba(226,232,240,0.95)",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
          overflow: "hidden",
          position: "relative"
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(37, 99, 235, 0.06)",
            filter: "blur(20px)"
          }}
        />

        <Stack justify="space-between" h="100%" gap="lg" style={{ position: "relative", zIndex: 1 }}>
          <Stack gap="md">
            <Group justify="space-between" align="flex-start">
              <Badge
                radius="xl"
                variant="light"
                leftSection={<IconSparkles size={12} />}
                styles={{
                  root: {
                    textTransform: "none",
                    fontWeight: 600
                  }
                }}
              >
                {course.level}
              </Badge>

              <Text
                fw={700}
                size="sm"
                c="blue"
                style={{
                  background: "rgba(37,99,235,0.08)",
                  padding: "6px 10px",
                  borderRadius: "999px"
                }}
              >
                {course.language}
              </Text>
            </Group>

            <Stack gap={6}>
              <Title
                order={3}
                style={{
                  fontSize: "26px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "#0f172a"
                }}
              >
                {course.title}
              </Title>

              <Text
                c="dimmed"
                size="sm"
                style={{
                  lineHeight: 1.7,
                  minHeight: 72
                }}
              >
                {course.description}
              </Text>
            </Stack>

            <Divider />

            <Stack gap="sm">
              <Group gap="sm" wrap="nowrap">
                <ThemeIcon variant="light" color="blue" radius="xl" size={34}>
                  <IconUser size={17} />
                </ThemeIcon>
                <Box>
                  <Text size="xs" c="dimmed">
                    {t("courses.teacher")}
                  </Text>
                  <Text size="sm" fw={600}>
                    {course.teacher}
                  </Text>
                </Box>
              </Group>

              <Group gap="sm" wrap="nowrap">
                <ThemeIcon variant="light" color="grape" radius="xl" size={34}>
                  <IconClock size={17} />
                </ThemeIcon>
                <Box>
                  <Text size="xs" c="dimmed">
                    {t("courses.duration")}
                  </Text>
                  <Text size="sm" fw={600}>
                    {course.duration}
                  </Text>
                </Box>
              </Group>

              <Group gap="sm" wrap="nowrap">
                <ThemeIcon variant="light" color="teal" radius="xl" size={34}>
                  <IconBook2 size={17} />
                </ThemeIcon>
                <Box>
                  <Text size="xs" c="dimmed">
                    {t("courses.lessons")}
                  </Text>
                  <Text size="sm" fw={600}>
                    {t("courses.perWeek", {
                      count: course.lessonsPerWeek
                    })}
                  </Text>
                </Box>
              </Group>

              <Group gap="sm" wrap="nowrap">
                <ThemeIcon variant="light" color="orange" radius="xl" size={34}>
                  <IconLanguage size={17} />
                </ThemeIcon>
                <Box>
                  <Text size="xs" c="dimmed">
                    {t("courses.language")}
                  </Text>
                  <Text size="sm" fw={600}>
                    {course.language}
                  </Text>
                </Box>
              </Group>
            </Stack>
          </Stack>

          <Stack gap="md">
            <Box
              style={{
                padding: "14px 16px",
                borderRadius: "18px",
                background: "rgba(37,99,235,0.05)",
                border: "1px solid rgba(37,99,235,0.10)"
              }}
            >
              <Text size="xs" c="dimmed" mb={4}>
                {t("courses.price")}
              </Text>
              <Text
                fw={800}
                style={{
                  fontSize: "28px",
                  letterSpacing: "-0.03em",
                  color: "#0f172a"
                }}
              >
                {course.price.toLocaleString()} so'm
              </Text>
            </Box>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                component={Link}
                to={`/courses/${course.slug}`}
                fullWidth
                size="md"
                radius="xl"
                rightSection={<IconArrowRight size={18} />}
                styles={{
                  root: {
                    fontWeight: 700
                  }
                }}
              >
                {t("courses.details")}
              </Button>
            </motion.div>
          </Stack>
        </Stack>
      </Card>
    </motion.div>
  );
}