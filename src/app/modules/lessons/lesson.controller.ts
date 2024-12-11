import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { LessonService } from "./lesson.service";
import sendResponse from "../../utils/sendresponse";

const addLesson = catchAsync(async (req: Request, res: Response) => {
  const lesson = await LessonService.createLesson(req.body);
  sendResponse(res, {
    statuseCode: 201,
    success: true,
    message: "Lesson added successfully",
    data: lesson,
  });
});

const getLessons = catchAsync(async (req: Request, res: Response) => {
  const lessons = await LessonService.getAllLessons();
  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Lessons fetched successfully",
    data: lessons,
  });
});

const editLesson = catchAsync(async (req: Request, res: Response) => {
  const updatedLesson = await LessonService.updateLesson(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statuseCode: updatedLesson ? 200 : 404,
    success: !!updatedLesson,
    message: updatedLesson ? "Lesson updated successfully" : "Lesson not found",
    data: updatedLesson,
  });
});

const removeLesson = catchAsync(async (req: Request, res: Response) => {
  await LessonService.deleteLesson(req.params.id);
  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Lesson deleted successfully",
    data: null,
  });
});

export const LessonController = {
  addLesson,
  getLessons,
  editLesson,
  removeLesson,
};
