import { LessonModel } from "./lesson.model";
import { Lesson } from "./lesson.interface";

const createLesson = async (lesson: Lesson) => {
  const uniqueLessonNumber = Date.now();
  const result = await LessonModel.create({
    lessonName: lesson.lessonName,
    lessonNumber: uniqueLessonNumber,
  });

  return result;
};

const getAllLessons = async () => {
  return await LessonModel.find();
};

const updateLesson = async (id: string, updateData: Partial<Lesson>) => {
  return await LessonModel.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteLesson = async (id: string) => {
  return await LessonModel.findByIdAndDelete(id);
};

export const LessonService = {
  createLesson,
  getAllLessons,
  updateLesson,
  deleteLesson,
};
