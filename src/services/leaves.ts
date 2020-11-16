import { CreateLeaveBody } from "../controllers/leaves";
import { CommentModel, LeaveModel, TaskModel, UserModel } from "../models";
import { CommentDocumentType } from "../models/comment";
import { LeaveDocumentType } from "../models/leave";
import { TaskDocumentType, TaskModelType } from "../models/task";

export default () => {
  return {
    async findTask(query: Object): Promise<TaskModelType> {
      const existingTask = await TaskModel.findOne(query);
      if (!existingTask) {
        throw new Error("404:Task not found!");
      }
      return existingTask;
    },
    async getLeaves(id: string): Promise<LeaveDocumentType[]> {
      const allLeaves = await LeaveModel.find({ assignTo: { $in: [id] } });
      return allLeaves;
    },
    async getAdminLeaves(): Promise<LeaveDocumentType[]> {
      const allLeaves = await LeaveModel.find({}).populate("assignTo");
      return allLeaves;
    },
    async createLeave(
      body: CreateLeaveBody,
      currentUserId: string
    ): Promise<LeaveDocumentType> {
      const userIds = (
        await UserModel.find({ name: { $in: body.assignTo } })
      ).map((user) => user.id);
      const createdLeave = await LeaveModel.create({
        ...body,
        assignTo: userIds,
        assignedBy: currentUserId,
      });
      return createdLeave;
    },
    async getTask(taskId: string): Promise<TaskDocumentType> {
      const existingTask = await this.findTask({ _id: taskId });
      return existingTask;
    },
    async commentOnTask(
      taskId: string,
      body: { comment: string },
      userId: string
    ): Promise<CommentDocumentType> {
      const createdComment = await CommentModel.create({
        comment: body.comment,
        commentBy: userId,
        taskId,
      });
      return createdComment;
    },
    async getCommentFromTask(taskId: string): Promise<CommentDocumentType[]> {
      const allCommentFromTask = await CommentModel.find({ taskId }).populate(
        "commentBy"
      );
      return allCommentFromTask;
    },
  };
};
