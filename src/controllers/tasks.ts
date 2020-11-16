import { Response } from "express";
import { sendFailure500Response, sendSuccess200Response } from "../helpers";
import { TasksService } from "../services";

export interface CreateTaskBody {
  task: string;
  assignTo: string[];
}

export default {
  async createTask(req: any, res: Response) {
    try {
      const body = req.body as CreateTaskBody;
      const data = await TasksService().createTask(body, req.user._id);
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
  async getTasks(req: any, res: Response) {
    try {
      const data = await TasksService().getTasks(req.user._id);
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
  async getAdminTasks(req: any, res: Response) {
    try {
      const data = await TasksService().getAdminTasks();
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
  async getTask(req: any, res: Response) {
    try {
      const taskId = req.params.id;
      const data = await TasksService().getTask(taskId);
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
  async commentOnTask(req: any, res: Response) {
    try {
      const userId = req.user._id;
      const taskId = req.params.id;
      const body = req.body;
      const data = await TasksService().commentOnTask(taskId, body, userId);
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
  async getCommentFromTask(req: any, res: Response) {
    try {
      const taskId = req.params.id;
      const data = await TasksService().getCommentFromTask(taskId);
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
};
