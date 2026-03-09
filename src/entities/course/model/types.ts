export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  teacher: string;
  duration: string;
  price: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "Abiturient";
  language: "Qaraqalpaq" | "O'zbek" | "Rus" | "English";
  lessonsPerWeek: number;
}