import { InterviewRepository } from "../infrastructure/interview.repository";
import { MessageRepository } from "../infrastructure/message.repository";

import { ResumeRepository } from "../../resume/infrastructure/resume.repository";

import { GeminiProvider } from "../../../ai/providers/gemini.provider";

import { startInterviewPrompt } from "../../../ai/prompts/interview/start-interview.prompt";
import { StartInterviewDto } from "../domain/interview.dto";
import { SendMessageDto } from "../domain/message.dto";
import { formatConversation } from "./utils/format-conversation";
import { followUpPrompt } from "../../../ai/prompts/interview/follow-up.prompt";

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
  async sendMessage(userId: string, dto: SendMessageDto) {
    try {
      const interview = await interviewRepository.findById(dto.interviewId);

      if (!interview) {
        throw new Error("Interview not found");
      }
      if (interview.userId.toString() !== userId) {
        throw new Error("Unauthorized");
      }

      //save the user's message
      await messageRepository.create({
        interviewId: dto.interviewId,

        sender: "user",

        content: dto.content,
      });
      //get the conversation history
      const messages = await messageRepository.getConversationHistory(
        dto.interviewId,
      );
      //format the conversation history for the prompt
      const history = formatConversation(messages);

      // build the follow-up prompt using the conversation history
      const prompt = followUpPrompt(history);
      const aiResponse = await geminiProvider.generate(prompt);
      await messageRepository.create({
        interviewId: dto.interviewId,

        sender: "ai",

        content: aiResponse,
      });

      //retunn the AI's response
      return {
        response: aiResponse,
      };
    } catch (error) {
      console.error("Error sending message:", error);
      throw new Error("Failed to send message");
    }
  }
  async getMyInterviews(userId: string) {
    try {
      return await interviewRepository.findByUserId(userId);
    } catch (error) {
      console.error("Error fetching interviews:", error);

      throw new Error("Failed to fetch interviews");
    }
  }
  async getInterviewDetails(interviewId: string, userId: string) {
    try {
      const interview = await interviewRepository.findById(interviewId);

      if (!interview) {
        throw new Error("Interview not found");
      }

      if (interview.userId.toString() !== userId) {
        throw new Error("Unauthorized");
      }

      const messages =
        await messageRepository.getConversationHistory(interviewId);

      return {
        interview,
        messages,
      };
    } catch (error) {
      console.error("Error fetching interview details:", error);

      throw new Error("Failed to fetch interview details");
    }
  }
}
