import { z } from "zod";

export const enrollSchema = z.object({
  fullName: z
    .string()
    .min(3, "Atı-jóni keminde 3 belgiden ibarat bolıwı kerek"),
  phone: z
    .string()
    .min(9, "Telefon nomeri durıs emes")
    .max(20, "Telefon nomeri óte uzaq"),
  message: z
    .string()
    .max(300, "Xabar 300 belgiden aspawı kerek")
    .optional()
    .or(z.literal("")),
  courseTitle: z.string().min(1, "Kurs atı kerek")
});

export type EnrollFormValues = z.infer<typeof enrollSchema>;