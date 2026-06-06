import { Router } from "express";

import { ReportController } from "./report.controller";

import { authMiddleware } from "../../../shared/middleware/auth.middleware";

const router = Router();

const reportController = new ReportController();

router.post(
  "/:interviewId/generate",
  authMiddleware,
  reportController.generateReport,
);

export default router;
