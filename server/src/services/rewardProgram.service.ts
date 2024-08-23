import { Event, RewardProgram } from "../common/interfaces";
import * as pg from "../pgConfig";
export default class RewardProgramService {
  getRewardPrograms = async () => {
    const query = "SELECT * FROM reward_program";
    const res = await pg.query(query);
    return res;
    console.log(res.rows);
  };
  createRewardProgram = async (rewardProgram: RewardProgram) => {
    const query =
      "INSERT INTO reward_program (id, organizer_id, threshold, discount, name, description) VALUES ($1, $2, $3, $4, $5, $6);";
    const values = [
      rewardProgram.id,
      rewardProgram.organizer_id,
      rewardProgram.threshold,
      rewardProgram.discount,
      rewardProgram.name,
      rewardProgram.description,
    ];
    const res = await pg.query(query, values);
    return res;
    console.log(res.rows);
  };
  updateRewardProgram = async (rewardProgram: RewardProgram) => {
    const query =
      "UPDATE reward_program SET organizer_id = $1, threshold = $2, discount = $3, name = $4, description = $5 WHERE id = $6;";
    const values = [
      rewardProgram.organizer_id,
      rewardProgram.threshold,
      rewardProgram.discount,
      rewardProgram.name,
      rewardProgram.description,
      rewardProgram.id,
    ];
    const res = await pg.query(query, values);
    return res;
    console.log(res.rows);
  };
  deleteRewardProgram = async (id: string) => {
    // this should cascade to deleting all records with the reward_id in table user_reward
    const query = "DELETE FROM reward_program WHERE id = $1;";
    const res = await pg.query(query);
    return res;
    console.log(res.rows);
  };
}
