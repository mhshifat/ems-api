import { Response } from "express";
import { sendFailure500Response, sendSuccess200Response } from "../helpers";
import { LeavesService, TasksService } from "../services";

export interface CreateLeaveBody {
  validFrom: string;
  validTo: string;
  earningLeave: string;
  medicalLeave: string;
  casualLeave: string;
  assignTo: string[];
}

export default {
  async createLeave(req: any, res: Response) {
    try {
      const body = req.body as CreateLeaveBody;
      const data = await LeavesService().createLeave(body, req.user._id);
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
  async getLeaves(req: any, res: Response) {
    try {
      const data = await LeavesService().getLeaves(req.user._id);
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
  async getAdminLeaves(req: any, res: Response) {
    try {
      const data = await LeavesService().getAdminLeaves();
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
