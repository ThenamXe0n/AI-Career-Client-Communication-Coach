import express from "express";
import authRoutes from "./modules/auth/api/auth.routes";
import resumeRoutes from "./modules/resume/api/resume.routes";
import interviewRoutes from "./modules/interview/api/interview.routes";
import reportRoutes from "./modules/report/api/report.routes";
import cors from "cors";
import { authMiddleware } from "./shared/middleware/auth.middleware";
import { InterviewController } from "./modules/interview/api/interview.controller";

const app = express();
const interviewController = new InterviewController();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  }),
);

app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/report", reportRoutes);
app.get(
  "/api/dashboard-stats",
  authMiddleware,
  interviewController.getDashboardStats,
);

export default app;
