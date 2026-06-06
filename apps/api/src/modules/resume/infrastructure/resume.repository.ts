import { ResumeModel } from "../model/resume.model";

export class ResumeRepository {
  async create(data: { userId: string; fileName: string; fileUrl: string }) {
    return ResumeModel.create(data);
  }

  async findByUserId(userId: string) {
    return ResumeModel.findOne({
      userId,
    });
  }

  async updateRawText(
  resumeId: string,
  rawText: string
) {
  return ResumeModel.findByIdAndUpdate(
    resumeId,
    {
      rawText,
    },
    {
      new: true,
    }
  );
}
}
