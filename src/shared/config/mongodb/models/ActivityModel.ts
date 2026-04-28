import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    metadata: {
      type: Object
    }
  },
  {
    timestamps: true
  }
);

export const ActivityModel = mongoose.model(
  "Activity",
  ActivitySchema
);