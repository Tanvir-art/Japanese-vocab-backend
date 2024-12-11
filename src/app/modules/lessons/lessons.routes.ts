import express from "express";
import auth from "../../middleware/auth";
import { LessonController } from "./lesson.controller";
import { USER_ROLE } from "../user/user.constant";
import { LessonValidation } from "./lesson.validation";
import validateRequest from "../../middleware/valdateRequest";

const router = express.Router();

router.post(
  "/addLesson",
  auth(USER_ROLE.admin),
  validateRequest(LessonValidation.lessonValidation),
  LessonController.addLesson
);
router.get(
  "/allLessons",
  auth(USER_ROLE.admin, USER_ROLE.user),
  LessonController.getLessons
);
router.put(
  "/:id",
  auth(USER_ROLE.admin),
  validateRequest(LessonValidation.updateLessonValidation),
  LessonController.editLesson
);
router.delete("/:id", auth(USER_ROLE.admin), LessonController.removeLesson);

export const lessonRoute = router;
