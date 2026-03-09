import type { Course } from "@/entities/course/model/types";
import type { CourseFilters } from "../model/types";

export function filterCourses(courses: Course[], filters: CourseFilters): Course[] {
  let result = [...courses];

  const searchValue = filters.search.trim().toLowerCase();

  if (searchValue) {
    result = result.filter((course) => {
      return (
        course.title.toLowerCase().includes(searchValue) ||
        course.description.toLowerCase().includes(searchValue) ||
        course.teacher.toLowerCase().includes(searchValue)
      );
    });
  }

  if (filters.language && filters.language !== "all") {
    result = result.filter((course) => course.language === filters.language);
  }

  if (filters.level && filters.level !== "all") {
    result = result.filter((course) => course.level === filters.level);
  }

  if (filters.sortByPrice === "asc") {
    result.sort((a, b) => a.price - b.price);
  }

  if (filters.sortByPrice === "desc") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
}