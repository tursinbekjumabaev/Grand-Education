import { Grid, Container, Text, Title } from "@mantine/core";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import AppLayout from "@/widgets/layout/AppLayout";
import { useCoursesQuery } from "@/entities/course/hooks/useCoursesQuery";
import CourseCard from "@/entities/course/ui/CourseCard";
import PageLoader from "@/shared/ui/PageLoader";
import PageError from "@/shared/ui/PageError";
import CourseFilters from "@/features/course-filter/ui/CourseFilters";
import type { CourseFilters as CourseFiltersType } from "@/features/course-filter/model/types";
import { filterCourses } from "@/features/course-filter/lib/filterCourses";
import EmptyState from "@/shared/ui/EmptyState";

const initialFilters: CourseFiltersType = {
  search: "",
  language: "all",
  level: "all",
  sortByPrice: "default"
};

export default function CoursesPage() {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useCoursesQuery();
  const [filters, setFilters] = useState<CourseFiltersType>(initialFilters);

  const filteredCourses = useMemo(() => {
    return filterCourses(data ?? [], filters);
  }, [data, filters]);

  if (isLoading) {
    return (
      <AppLayout>
        <PageLoader />
      </AppLayout>
    );
  }

  if (isError) {
    return (
      <AppLayout>
        <PageError message="Kurslardı júklewde qáte boldı" />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <Container size="lg" py={80}>
        <Title order={1}>{t("courses.title")}</Title>
        <Text mt="md" mb="xl" c="dimmed">
          {t("courses.description")}
        </Text>

        <CourseFilters filters={filters} onChange={setFilters} />

        {filteredCourses.length === 0 ? (
          <EmptyState
            title={t("courses.notFoundTitle")}
            description={t("courses.notFoundDescription")}
            actionLabel={t("courses.reset")}
            onAction={() => setFilters(initialFilters)}
          />
        ) : (
          <Grid>
            {filteredCourses.map((course) => (
              <Grid.Col key={course.id} span={{ base: 12, sm: 6, lg: 4 }}>
                <CourseCard course={course} />
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Container>
    </AppLayout>
  );
}