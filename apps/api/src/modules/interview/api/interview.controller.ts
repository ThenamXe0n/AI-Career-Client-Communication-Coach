import { Request, Response } from "express";
import { InterviewService } from "../application/interview.services";
import { apiResponse } from "../../../shared/utils/api-response";

const interviewService = new InterviewService();

export class InterviewController {
  startInterview = async (req: Request, res: Response) => {
    try {
      const userId = req.user!.userId;

      const result = await interviewService.startInterview(userId, req.body);
      let response = apiResponse(
        true,
        "Interview started successfully",
        result,
      );

      return res.json(response);
    } catch (error) {
      let response = apiResponse(
        false,
        error?.message || "Failed to start interview",
        null,
      );
      return res.status(500).json(response);
    }
  };
  sendMessage = async (req: Request, res: Response) => {
    const userId = req.user!.userId;

    const result = await interviewService.sendMessage(userId, req.body);
    let response = apiResponse(true, "Message sent successfully", result);

    return res.status(200).json(response);
  };
}
