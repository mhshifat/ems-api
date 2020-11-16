import { Document, model, Schema } from "mongoose";

export interface UserDocumentType {
  id: string;
  name: string;
  email: string;
  password?: string;
  department: string;
  role: string;
}

const userSchema = new Schema<UserDocumentType>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export type UserModelType = UserDocumentType & Document;

export default model<UserModelType>("User", userSchema);
