export const evaluateInterviewPrompt = (
  resume: string,
  conversation: string,
) => `
You are a senior engineering interviewer.

Analyze the interview.

Resume:

${resume}

Interview:

${conversation}

Return ONLY JSON.

{
  "overallScore": 0,
  "technicalScore": 0,
  "communicationScore": 0,
  "strengths": [],
  "improvements": [],
  "missedConcepts": [],
  "finalFeedback": ""
}
`;
