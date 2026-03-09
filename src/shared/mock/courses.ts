import type { Course } from "@/entities/course/model/types";

export const coursesMock: Course[] = [
  {
    id: "1",
    slug: "matematika-abiturient",
    title: "Matematika",
    description:
      "Universitetke kiriwge tayarlıq ushın teoriyalıq hám ámeliy matematika kursı.",
    teacher: "Aydos Qurbanbayev",
    duration: "6 ay",
    price: 400000,
    level: "Abiturient",
    language: "Qaraqalpaq",
    lessonsPerWeek: 3
  },
  {
    id: "2",
    slug: "inglis-tili",
    title: "Inglis tili",
    description:
      "Grammar, speaking, listening hám IELTS formatına kiriwshi negizgi kurs.",
    teacher: "Madina Tilewova",
    duration: "4 ay",
    price: 350000,
    level: "Beginner",
    language: "O'zbek",
    lessonsPerWeek: 3
  },
  {
    id: "3",
    slug: "ona-tili-adebiyat",
    title: "Ana tili hám ádebiyat",
    description:
      "Test tapsırmaları, teoriya hám grammatika boyınsha kúsheytirilgen tayarlıq.",
    teacher: "Gúlzada Reyimova",
    duration: "5 ay",
    price: 300000,
    level: "Abiturient",
    language: "Qaraqalpaq",
    lessonsPerWeek: 2
  },
  {
    id: "4",
    slug: "tarix",
    title: "Tarix",
    description:
      "Qaraqalpaqstan hám dúnya tariyxı boyınsha testke tayarlıq kursı.",
    teacher: "Azamat Erejepov",
    duration: "5 ay",
    price: 320000,
    level: "Intermediate",
    language: "Rus",
    lessonsPerWeek: 2
  },
  {
    id: "5",
    slug: "fizika",
    title: "Fizika",
    description:
      "Mesele sheshiw, formula menen islew hám exam ushin ámeliy tayarlıq.",
    teacher: "Temirlan Jaksybaev",
    duration: "6 ay",
    price: 420000,
    level: "Advanced",
    language: "O'zbek",
    lessonsPerWeek: 3
  },
  {
    id: "6",
    slug: "biologiya",
    title: "Biologiya",
    description:
      "Medicina hám biologiya baǵdarındaǵı studentler ushın negizgi kurs.",
    teacher: "Shahnoza Raximova",
    duration: "4 ay",
    price: 360000,
    level: "Intermediate",
    language: "Qaraqalpaq",
    lessonsPerWeek: 2
  }
];