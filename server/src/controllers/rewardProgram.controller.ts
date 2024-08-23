import { NextFunction, Request, Response } from "express";
import { RewardProgram } from "../common/interfaces";
import RewardProgramService from "../services/rewardProgram.service";

export default class RewardProgramController {
  public rewardProgramService = new RewardProgramService();

  public getRewardPrograms = async (req: Request, res: Response) => {
    try {
      const resp = await this.rewardProgramService.getRewardPrograms();
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
  public createRewardProgram = async (req: Request, res: Response) => {
    try {
      const rewardProgram: RewardProgram = req.body;
      const resp = await this.rewardProgramService.createRewardProgram(
        rewardProgram
      );
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
  public updateRewardProgram = async (req: Request, res: Response) => {
    try {
      const rewardProgram: RewardProgram = req.body;

      const resp = await this.rewardProgramService.updateRewardProgram(
        rewardProgram
      );
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
  public deleteRewardProgram = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const resp = await this.rewardProgramService.deleteRewardProgram(id);
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
}
