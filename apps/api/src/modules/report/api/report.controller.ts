import { Request, Response } from "express";

import { ReportService } from "../application/report.service";

const reportService = new ReportService();

export class ReportController {
  generateReport = async (req: Request, res: Response) => {
    const interviewId = req.params.interviewId;

    const userId = req.user!.userId;

    const report = await reportService.generateReport(interviewId, userId);

    return res.status(200).json({
      success: true,
      data: report,
    });
  };
}
