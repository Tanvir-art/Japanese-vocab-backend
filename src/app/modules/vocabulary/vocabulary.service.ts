import { VocabularyModel } from "./vocabulary.model";
import { Vocabulary } from "./vocabulary.interface";

const createVocabulary = async (vocabulary: Vocabulary) => {
  return await VocabularyModel.create(vocabulary);
};

const getVocabulariesByLesson = async (lessonId: string) => {
  return await VocabularyModel.find({ lessonId });
};

const updateVocabulary = async (
  id: string,
  updateData: Partial<Vocabulary>
) => {
  return await VocabularyModel.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteVocabulary = async (id: string) => {
  return await VocabularyModel.findByIdAndDelete(id);
};
// finish the service
export const VocabularyService = {
  createVocabulary,
  getVocabulariesByLesson,
  updateVocabulary,
  deleteVocabulary,
};
