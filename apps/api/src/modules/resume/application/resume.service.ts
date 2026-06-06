import { ResumeRepository } from "../infrastructure/resume.repository";
import { PdfService } from "./pdf.service";

const resumeRepository = new ResumeRepository();

export class ResumeService {
  async uploadResume(userId: string, file: Express.Multer.File) {
    let pdfService = new PdfService();
    const resume = await resumeRepository.create({
      userId,

      fileName: file.originalname,

      fileUrl: file.path,
    });
    const rawText = await pdfService.extractText(file.path);
    await resumeRepository.updateRawText(resume._id, rawText);
    return resume;
  }
  async getMyResume(userId: string) {
    const myresume = await resumeRepository.findByUserId(userId);
    return myresume;
  }
}
