import { InterviewRepository } from "../infrastructure/interview.repository";
import { MessageRepository } from "../infrastructure/message.repository";

import { ResumeRepository } from "../../resume/infrastructure/resume.repository";

import { GeminiProvider } from "../../../ai/providers/gemini.provider";

import { startInterviewPrompt } from "../../../ai/prompts/interview/start-interview.prompt";
import { StartInterviewDto } from "../domain/interview.dto";

const interviewRepository = new InterviewRepository();

const messageRepository = new MessageRepository();

const resumeRepository = new ResumeRepository();

const geminiProvider = new GeminiProvider();
export class InterviewService {
  async startInterview(userId: string, dto: StartInterviewDto) {
    try {
      const resume = await resumeRepository.findByUserId(userId);

      if (!resume) {
        throw new Error("Resume not found");
      }

      const interview = await interviewRepository.create({
        userId,

        mode: dto.mode,

        role: dto.role,
      });
      //start the interview by generating the first question using Gemini
      const prompt = startInterviewPrompt(
        dto.role,

        resume?.experienceYears || 0,

        resume?.skills || [],
      );

      //ask Gemini to generate the first interview question based on the prompt
      const firstQuestion = await geminiProvider.generate(prompt);

      //save the first question as a message in the database
      await messageRepository.create({
        interviewId: interview.id,

        sender: "ai",

        content: firstQuestion,
      });
      //return the interview details along with the first question
      return {
        interview,

        firstQuestion,
      };
    } catch (error) {
      console.error("Error starting interview:", error);
      throw new Error("Failed to start interview");
    }
  }
}
