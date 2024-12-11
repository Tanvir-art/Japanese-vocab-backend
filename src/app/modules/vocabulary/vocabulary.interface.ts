import { Types } from "mongoose";

export interface Vocabulary {
  word: string;
  pronunciation: string;
  meaning: string;
  whenToSay: string;
  lessonId: Types.ObjectId;
}
