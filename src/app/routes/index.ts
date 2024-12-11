import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { lessonRoute } from "../modules/lessons/lessons.routes";
import { vocabularyRoute } from "../modules/vocabulary/vocabulary.routes";

const router = Router();

const moduleRoute = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/lessons",
    route: lessonRoute,
  },
  {
    path: "/vocabulary",
    route: vocabularyRoute,
  },
];

moduleRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
