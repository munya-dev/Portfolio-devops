import { NextFunction, Request, Response } from "express";
import { UserReward } from "../common/interfaces";
import UserRewardService from "../services/userReward.service";

export default class UserRewardController {
  public userRewardService = new UserRewardService();

  public getUserRewards = async (req: Request, res: Response) => {
    try {
      const resp = await this.userRewardService.getUserRewards();
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
  public createUserReward = async (req: Request, res: Response) => {
    try {
      const rewardProgram: UserReward = req.body;
      const resp = await this.userRewardService.createUserReward(rewardProgram);
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
  public updateUserReward = async (req: Request, res: Response) => {
    try {
      const rewardProgram: UserReward = req.body;

      const resp = await this.userRewardService.updateUserReward(rewardProgram);
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
  public deleteUserReward = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const resp = await this.userRewardService.deleteUserReward(id);
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
}
