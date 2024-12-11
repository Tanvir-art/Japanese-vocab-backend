import { z } from "zod";

const lessonValidation = z.object({
  body: z.object({
    lessonName: z.string({
      required_error: "lessonName is required",
      invalid_type_error: "lessonName must be a string",
    }),
  }),
});

const updateLessonValidation = z.object({
  body: z.object({
    lessonName: z.string().optional(),
  }),
});

export const LessonValidation = {
  lessonValidation,
  updateLessonValidation,
};
