import { CreateTaskBody } from "../controllers/tasks";
import { CommentModel, TaskModel, UserModel } from "../models";
import { CommentDocumentType } from "../models/comment";
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
    async getTasks(id: string): Promise<TaskDocumentType[]> {
      const allTasks = await TaskModel.find({ assignTo: { $in: [id] } });
      return allTasks;
    },
    async getAdminTasks(): Promise<TaskDocumentType[]> {
      const allTasks = await TaskModel.find({});
      return allTasks;
    },
    async createTask(
      body: CreateTaskBody,
      currentUserId: string
    ): Promise<TaskDocumentType> {
      const userIds = (
        await UserModel.find({ name: { $in: body.assignTo } })
      ).map((user) => user.id);
      const createdTask = await TaskModel.create({
        assignTo: userIds,
        task: body.task,
        assignedBy: currentUserId,
      });
      return createdTask;
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
