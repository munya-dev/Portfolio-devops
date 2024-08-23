import { NextFunction, Request, Response } from "express";
import { Organizer } from "../common/interfaces";
import OrganizerService from "../services/organizer.service";

export default class OrganizerController {
  public organizerService = new OrganizerService();

  public getOrganizers = async (req: Request, res: Response) => {
    try {
      const resp = await this.organizerService.getOrganizers();
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
  public createOrganizer = async (req: Request, res: Response) => {
    try {
      const organizer: Organizer = req.body;
      const resp = await this.organizerService.createOrganizer(organizer);
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
  public updateOrganizer = async (req: Request, res: Response) => {
    try {
      const organizer: Organizer = req.body;

      const resp = await this.organizerService.updateOrganizer(organizer);
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
  public deleteOrganizer = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const resp = await this.organizerService.deleteOrganizer(id);
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
}
