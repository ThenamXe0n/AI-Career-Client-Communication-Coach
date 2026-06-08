import { InterviewModel } from "../model/interview.model";

export class InterviewRepository {
  async create(data: { userId: string; mode: string; role: string }) {
    return InterviewModel.create(data);
  }

  async findById(interviewId: string) {
    return InterviewModel.findById(interviewId);
  }

  async markCompleted(interviewId: string) {
    return InterviewModel.findByIdAndUpdate(
      interviewId,
      {
        status: "completed",
      },
      {
        new: true,
      },
    );
  }

  async findByUserId(userId: string) {
    return InterviewModel.find({
      userId,
    }).sort({
      createdAt: -1,
    });
  }
}
