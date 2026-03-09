import { useQuery } from "@tanstack/react-query";
import { getCourseBySlug } from "@/shared/api/courses";

export function useCourseDetailsQuery(slug: string) {
  return useQuery({
    queryKey: ["course", slug],
    queryFn: () => getCourseBySlug(slug),
    enabled: Boolean(slug)
  });
}