import express from "express";
import authRoutes from "./modules/auth/api/auth.routes";
import resumeRoutes from "./modules/resume/api/resume.routes";
import interviewRoutes from "./modules/interview/api/interview.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/interview", interviewRoutes);

export default app;
