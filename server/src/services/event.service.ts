import { Event } from "../common/interfaces";
import * as pg from "../pgConfig";
export default class EventService {
  getEvents = async () => {
    const query = "SELECT * FROM event";
    const res = await pg.query(query);
    return res;
    console.log(res.rows);
  };
  createEvent = async (event: Event) => {
    const query =
      "INSERT INTO event (id, organizer_id, name, description, attendance, fee, tags, startDate, endDate, location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);";
    const values = [
      event.id,
      event.organizer_id,
      event.name,
      event.description,
      event.attendance,
      event.fee,
      event.tags,
      event.startDate,
      event.endDate,
      event.location,
    ];
    const res = await pg.query(query, values);
    return res;
    console.log(res.rows);
  };
  updateEvent = async (event: Event) => {
    const query =
      "UPDATE event SET organizer_id = $1, name = $2, description = $3, attendance = $4, fee = $5, tags = $6, startDate = $7, endDate = $8, location = $9 WHERE id = $10;";
    const values = [
      event.organizer_id,
      event.name,
      event.description,
      event.attendance,
      event.fee,
      event.tags,
      event.startDate,
      event.endDate,
      event.location,
      event.id,
    ];
    const res = await pg.query(query);
    return res;
    console.log(res.rows);
  };
  deleteEvent = async (id: string) => {
    const query = "DELETE FROM event WHERE id = $1;";
    const res = await pg.query(query);
    return res;
    console.log(res.rows);
  };
}
