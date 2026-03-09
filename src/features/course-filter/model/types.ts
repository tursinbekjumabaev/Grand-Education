export interface CourseFilters {
  search: string;
  language: string;
  level: string;
  sortByPrice: "default" | "asc" | "desc";
}