import { Router } from "express";

import { InterviewController } from "./interview.controller";

import { authMiddleware } from "../../../shared/middleware/auth.middleware";

const router = Router();

const interviewController =
  new InterviewController();

router.post(
  "/start",
  authMiddleware,
  interviewController.startInterview
);

export default router;