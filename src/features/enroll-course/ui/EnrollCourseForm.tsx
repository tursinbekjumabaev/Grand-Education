import { Button, Stack, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { fromError } from "zod-validation-error";
import { z } from "zod";
import { enrollSchema, type EnrollFormValues } from "../model/schema";
import { saveApplication } from "../lib/saveApplication";
import { useState } from "react";

interface Props {
  courseTitle: string;
}

export default function EnrollCourseForm({ courseTitle }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<EnrollFormValues>({
    initialValues: {
      fullName: "",
      phone: "",
      message: "",
      courseTitle
    },
    validate: (values) => {
      const result = enrollSchema.safeParse(values);

      if (result.success) {
        return {};
      }

      const fieldErrors: Record<string, string> = {};

      for (const issue of result.error.issues) {
        const fieldName = String(issue.path[0] ?? "");
        if (!fieldErrors[fieldName]) {
          const oneIssueError = new z.ZodError([issue]);
          fieldErrors[fieldName] = fromError(oneIssueError).message;
        }
      }

      return fieldErrors;
    }
  });

  async function handleSubmit(values: EnrollFormValues) {
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      await saveApplication(values);
      form.reset();
      form.setFieldValue("courseTitle", courseTitle);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="sm">
        <TextInput
          label="Atı-jóni"
          placeholder="Atıńızdı jazıń"
          {...form.getInputProps("fullName")}
        />

        <TextInput
          label="Telefon"
          placeholder="+998 90 123 45 67"
          {...form.getInputProps("phone")}
        />

        <TextInput
          label="Kurs"
          readOnly
          {...form.getInputProps("courseTitle")}
        />

        <Textarea
          label="Qosımsha xabar"
          placeholder="Qáleseńiz qosımsha maǵlıwmat jazıń"
          minRows={4}
          {...form.getInputProps("message")}
        />

        <Button type="submit" loading={isSubmitting}>
          Jazılıw jiberiw
        </Button>

        {isSuccess && (
          <div
            style={{
              padding: "12px",
              borderRadius: "8px",
              background: "#ebfbee",
              color: "#2b8a3e",
              fontWeight: 500
            }}
          >
            Arzańız tabıslı jiberildi.
          </div>
        )}
      </Stack>
    </form>
  );
}