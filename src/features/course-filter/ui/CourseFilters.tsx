import {
  Button,
  Grid,
  Group,
  Paper,
  Select,
  Stack,
  Text,
  TextInput
} from "@mantine/core";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  IconAdjustmentsHorizontal,
  IconLanguage,
  IconRefresh,
  IconSearch,
  IconSortAscending,
  IconStars
} from "@tabler/icons-react";
import type { CourseFilters } from "../model/types";

interface Props {
  filters: CourseFilters;
  onChange: (next: CourseFilters) => void;
}

export default function CourseFilters({ filters, onChange }: Props) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Paper
        radius="24px"
        p="xl"
        mb="xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)",
          border: "1px solid rgba(226,232,240,0.95)",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)"
        }}
      >
        <Stack gap="lg">
          <Group justify="space-between" align="center">
            <Group gap="sm">
              <IconAdjustmentsHorizontal size={20} />
              <div>
                <Text fw={700} size="lg">
                  Filter
                </Text>
                <Text size="sm" c="dimmed">
                  Kurslardı tez hám qulay izlew ushın parametrlerdi tańlań
                </Text>
              </div>
            </Group>

            <Button
              variant="light"
              radius="xl"
              leftSection={<IconRefresh size={16} />}
              onClick={() =>
                onChange({
                  search: "",
                  language: "all",
                  level: "all",
                  sortByPrice: "default"
                })
              }
            >
              {t("courses.reset")}
            </Button>
          </Group>

          <Grid gutter="md">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                label={t("courses.search")}
                placeholder={t("courses.searchPlaceholder")}
                radius="xl"
                size="md"
                leftSection={<IconSearch size={16} />}
                value={filters.search}
                onChange={(event) =>
                  onChange({
                    ...filters,
                    search: event.currentTarget.value
                  })
                }
                styles={{
                  label: {
                    fontWeight: 600,
                    marginBottom: 6
                  }
                }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 3 }}>
              <Select
                label={t("courses.language")}
                radius="xl"
                size="md"
                leftSection={<IconLanguage size={16} />}
                data={[
                  { value: "all", label: t("courses.all") },
                  { value: "Qaraqalpaq", label: "Qaraqalpaq" },
                  { value: "O'zbek", label: "O'zbek" },
                  { value: "Rus", label: "Rus" },
                  { value: "English", label: "English" }
                ]}
                value={filters.language}
                onChange={(value) =>
                  onChange({
                    ...filters,
                    language: value || "all"
                  })
                }
                styles={{
                  label: {
                    fontWeight: 600,
                    marginBottom: 6
                  }
                }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 3 }}>
              <Select
                label={t("courses.level")}
                radius="xl"
                size="md"
                leftSection={<IconStars size={16} />}
                data={[
                  { value: "all", label: t("courses.all") },
                  { value: "Beginner", label: "Beginner" },
                  { value: "Intermediate", label: "Intermediate" },
                  { value: "Advanced", label: "Advanced" },
                  { value: "Abiturient", label: "Abiturient" }
                ]}
                value={filters.level}
                onChange={(value) =>
                  onChange({
                    ...filters,
                    level: value || "all"
                  })
                }
                styles={{
                  label: {
                    fontWeight: 600,
                    marginBottom: 6
                  }
                }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 2 }}>
              <Select
                label={t("courses.price")}
                radius="xl"
                size="md"
                leftSection={<IconSortAscending size={16} />}
                data={[
                  { value: "default", label: t("courses.default") },
                  { value: "asc", label: t("courses.cheapFirst") },
                  { value: "desc", label: t("courses.expensiveFirst") }
                ]}
                value={filters.sortByPrice}
                onChange={(value) =>
                  onChange({
                    ...filters,
                    sortByPrice: (value as CourseFilters["sortByPrice"]) || "default"
                  })
                }
                styles={{
                  label: {
                    fontWeight: 600,
                    marginBottom: 6
                  }
                }}
              />
            </Grid.Col>
          </Grid>
        </Stack>
      </Paper>
    </motion.div>
  );
}