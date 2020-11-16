import { Document, model, Schema } from "mongoose";
import { UserDocumentType } from "./user";

export interface TaskDocumentType {
  id: string;
  task: string;
  assignTo: UserDocumentType["id"][];
  assignedBy: UserDocumentType["id"];
  createdAt?: string;
}

const taskSchema = new Schema<TaskDocumentType>(
  {
    task: {
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

export type TaskModelType = TaskDocumentType & Document;

export default model<TaskModelType>("Task", taskSchema);
