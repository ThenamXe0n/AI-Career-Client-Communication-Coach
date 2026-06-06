import { ReportModel } from "../model/report.model";

export class ReportRepository {
  async create(data: any) {
    return ReportModel.create(data);
  }

  async findByInterviewId(interviewId: string) {
    return ReportModel.findOne({
      interviewId,
    });
  }
}
