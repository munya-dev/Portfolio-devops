import { Event, Organizer } from "../common/interfaces";
import * as pg from "../pgConfig";
export default class OrganizerService {
  getOrganizers = async () => {
    const query = "SELECT * FROM organizer";
    const res = await pg.query(query);
    return res;
    console.log(res.rows);
  };
  createOrganizer = async (organizer: Organizer) => {
    const query =
      "INSERT INTO organizer (id, name, type, rating, totalevents, contactinformation, dorefund) VALUES ($1, $2, $3, $4, $5, $6, $7);";
    const values = [
      organizer.id,
      organizer.name,
      organizer.type,
      organizer.rating,
      organizer.totalevents,
      organizer.contactinformation,
      organizer.dorefund,
    ];
    const res = await pg.query(query, values);
    return res;
    console.log(res.rows);
  };
  updateOrganizer = async (organizer: Organizer) => {
    const query =
      "UPDATE organizer SET name = $1, type = $2, rating = $3, totalevents = $4, contactinformation = $5, dorefund = $6 WHERE id = $7;";
    const values = [
      organizer.name,
      organizer.type,
      organizer.rating,
      organizer.totalevents,
      organizer.contactinformation,
      organizer.dorefund,
      organizer.id,
    ];
    const res = await pg.query(query);
    return res;
    console.log(res.rows);
  };
  deleteOrganizer = async (id: string) => {
    const query = "DELETE FROM organizer WHERE id = $1;";
    const res = await pg.query(query);
    return res;
    console.log(res.rows);
  };
}
