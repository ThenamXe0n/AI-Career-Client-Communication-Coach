import { Request, Response } from "express";
import { ResumeService } from "../application/resume.service";

const resumeService = new ResumeService();

export class ResumeController {
  uploadResume = async (req: Request, res: Response) => {
    const userId = req.user!.userId;

    const file = req.file!;

    const resume = await resumeService.uploadResume(userId, file);

    return res.json({
      success: true,
      data: resume,
    });
  };
}
