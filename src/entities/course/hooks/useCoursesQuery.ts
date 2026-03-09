import { useQuery } from "@tanstack/react-query";
import { getCourses } from "@/shared/api/courses";

export function useCoursesQuery() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: getCourses
  });
}