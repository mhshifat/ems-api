import { Document, model, Schema } from "mongoose";
import { UserDocumentType } from "./user";

export interface CommentDocumentType {
  id: string;
  comment: string;
  taskId: UserDocumentType["id"];
  commentBy: UserDocumentType["id"];
  createdAt?: string;
}

const commentSchema = new Schema<CommentDocumentType>(
  {
    comment: {
      type: String,
      required: true,
    },
    taskId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commentBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export type CommentModelType = CommentDocumentType & Document;

export default model<CommentModelType>("Comment", commentSchema);
