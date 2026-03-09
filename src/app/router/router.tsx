import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";
import CoursesPage from "@/pages/courses/CoursesPage";
import CourseDetailsPage from "@/pages/course-details/CourseDetailsPage";
import AboutPage from "@/pages/about/AboutPage";
import ResultsPage from "@/pages/results/ResultsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/courses",
    element: <CoursesPage />
  },
  {
    path: "/courses/:slug",
    element: <CourseDetailsPage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/results",
    element: <ResultsPage />
  }
]);