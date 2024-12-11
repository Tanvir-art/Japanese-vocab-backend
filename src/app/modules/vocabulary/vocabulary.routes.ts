import express from "express";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";
import { vocabularyController } from "./vocabulary.controller";
import validateRequest from "../../middleware/valdateRequest";
import { VocabularyValidation } from "./vocabulary.validation";
const router = express.Router();

router.post(
  "/addVocabulary",
  auth(USER_ROLE.admin),
  validateRequest(VocabularyValidation.addVocabularyValidation),
  vocabularyController.addVocabulary
);
router.get(
  "/:lessonId",
  auth(USER_ROLE.admin, USER_ROLE.user),
  vocabularyController.getVocabularies
);
router.put(
  "/:id",
  auth(USER_ROLE.admin),
  validateRequest(VocabularyValidation.updateVocabularyValidation),
  vocabularyController.editVocabulary
);
router.delete(
  "/:id",
  auth(USER_ROLE.admin),
  vocabularyController.removeVocabulary
);

export const vocabularyRoute = router;
