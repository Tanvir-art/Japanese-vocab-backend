import { z } from "zod";

const addVocabularyValidation = z.object({
  body: z.object({
    word: z.string({ required_error: "word is required" }),
    pronunciation: z.string({ required_error: "pronunciation is required" }),
    meaning: z.string({ required_error: "meaning is required" }),
    whenToSay: z.string({ required_error: "whenToSay is required" }),
    lessonId: z.string({ required_error: "lessonId is required" }),
  }),
});

const updateVocabularyValidation = z.object({
  body: z.object({
    word: z.string().optional(),
    pronunciation: z.string().optional(),
    meaning: z.string().optional(),
    whenToSay: z.string().optional(),
    lessonId: z.string().optional(),
  }),
});

export const VocabularyValidation = {
  addVocabularyValidation,
  updateVocabularyValidation,
};
