import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    interviewId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Interview",
      required: true,
    },

    overallScore: Number,

    technicalScore: Number,

    communicationScore: Number,

    strengths: [String],

    improvements: [String],

    missedConcepts: [String],

    finalFeedback: String,
  },
  {
    timestamps: true,
  },
);

export const ReportModel = mongoose.model("Report", reportSchema);
