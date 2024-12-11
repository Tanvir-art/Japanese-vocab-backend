import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendresponse";
import { VocabularyService } from "./vocabulary.service";

const addVocabulary = catchAsync(async (req: Request, res: Response) => {
  const vocabulary = await VocabularyService.createVocabulary(req.body);
  sendResponse(res, {
    statuseCode: 201,
    success: true,
    message: "Vocabulary added successfully",
    data: vocabulary,
  });
});

const getVocabularies = catchAsync(async (req: Request, res: Response) => {
  const vocabularies = await VocabularyService.getVocabulariesByLesson(
    req.params.lessonId
  );
  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Vocabularies fetched successfully",
    data: vocabularies,
  });
});

const editVocabulary = catchAsync(async (req: Request, res: Response) => {
  const updatedVocabulary = await VocabularyService.updateVocabulary(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statuseCode: updatedVocabulary ? 200 : 404,
    success: !!updatedVocabulary,
    message: updatedVocabulary
      ? "Vocabulary updated successfully"
      : "Vocabulary not found",
    data: updatedVocabulary,
  });
});

const removeVocabulary = catchAsync(async (req: Request, res: Response) => {
  await VocabularyService.deleteVocabulary(req.params.id);
  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Vocabulary deleted successfully",
    data: null,
  });
});

export const vocabularyController = {
  addVocabulary,
  getVocabularies,
  editVocabulary,
  removeVocabulary,
};
