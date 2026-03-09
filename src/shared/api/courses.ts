import { coursesMock } from "@/shared/mock/courses";
import type { Course } from "@/entities/course/model/types";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCourses(): Promise<Course[]> {
  await wait(500);
  return coursesMock;
}

export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  await wait(400);
  return coursesMock.find((course) => course.slug === slug);
}