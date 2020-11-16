import { Document, model, Schema } from "mongoose";
import { UserDocumentType } from "./user";

export interface LeaveDocumentType {
  id: string;
  validFrom: string;
  validTo: string;
  earningLeave: string;
  medicalLeave: string;
  casualLeave: string;
  assignTo: UserDocumentType["id"][];
  assignedBy: UserDocumentType["id"];
  createdAt?: string;
}

const leaveSchema = new Schema<LeaveDocumentType>(
  {
    validFrom: {
      type: String,
      required: true,
    },
    validTo: {
      type: String,
      required: true,
    },
    earningLeave: {
      type: String,
      required: true,
    },
    medicalLeave: {
      type: String,
      required: true,
    },
    casualLeave: {
      type: String,
      required: true,
    },
    assignTo: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    assignedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export type LeaveModelType = LeaveDocumentType & Document;

export default model<LeaveModelType>("Leave", leaveSchema);
