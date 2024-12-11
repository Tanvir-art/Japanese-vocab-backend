import mongoose, { Schema } from "mongoose";
import { Vocabulary } from "./vocabulary.interface";

const VocabularySchema = new Schema<Vocabulary>({
  word: { type: String, required: true },
  pronunciation: { type: String, required: true },
  meaning: { type: String, required: true },
  whenToSay: { type: String, required: true },
  lessonId: { type: Schema.Types.ObjectId, ref: "Lesson", required: true },
});

export const VocabularyModel = mongoose.model<Vocabulary>(
  "Vocabulary",
  VocabularySchema
);
