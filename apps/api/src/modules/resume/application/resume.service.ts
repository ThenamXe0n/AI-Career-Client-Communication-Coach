import { ResumeRepository }
from "../infrastructure/resume.repository";

const resumeRepository =
  new ResumeRepository();

export class ResumeService {
  async uploadResume(
    userId: string,
    file: Express.Multer.File
  ) {
    return resumeRepository.create({
      userId,

      fileName:
        file.originalname,

      fileUrl:
        file.path,
    });
  }
}