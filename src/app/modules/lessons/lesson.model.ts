import mongoose, { Schema } from "mongoose";
import { Lesson } from "./lesson.interface";

const LessonSchema = new Schema<Lesson>({
  lessonName: { type: String, required: true },
  lessonNumber: { type: String },
  vocabularyCount: { type: Number, default: 0 },
});

export const LessonModel = mongoose.model<Lesson>("Lesson", LessonSchema);
