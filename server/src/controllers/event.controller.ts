import { NextFunction, Request, Response } from "express";
import { Event } from "../common/interfaces";
import EventService from "../services/event.service";

export default class EventController {
  public eventService = new EventService();

  public getEvents = async (req: Request, res: Response) => {
    try {
      const resp = await this.eventService.getEvents();

      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
  public createEvent = async (req: Request, res: Response) => {
    try {
      const event: Event = req.body;
      const resp = await this.eventService.createEvent(event);
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
  public updateEvent = async (req: Request, res: Response) => {
    try {
      const event: Event = req.body;

      const resp = await this.eventService.updateEvent(event);
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
  public deleteEvent = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const resp = await this.eventService.deleteEvent(id);
      res.json(resp.rows);
    } catch (error) {
      console.error(error);
    }
  };
}
