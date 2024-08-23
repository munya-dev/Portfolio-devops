import { Event, UserReward } from "../common/interfaces";
import * as pg from "../pgConfig";
export default class UserRewardService {
  getUserRewards = async () => {
    const query = "SELECT * FROM user_reward";
    const res = await pg.query(query);
    return res;
    console.log(res.rows);
  };
  createUserReward = async (userReward: UserReward) => {
    const query =
      "INSERT INTO user_reward (user_id, reward_id, points) VALUES ($1, $2, $3);";
    const values = [
      userReward.user_id,
      userReward.reward_id,
      userReward.points,
    ];
    const res = await pg.query(query, values);
    return res;
    console.log(res.rows);
  };
  updateUserReward = async (userReward: UserReward) => {
    const query =
      "UPDATE user_reward SET reward_id = $1, points = $2 WHERE user_id = $3;";
    const values = [
      userReward.reward_id,
      userReward.points,
      userReward.user_id,
    ];
    const res = await pg.query(query, values);
    return res;
    console.log(res.rows);
  };
  deleteUserReward = async (id: string) => {
    const query =
      "DELETE FROM user_reward WHERE user_id = $1 AND reward_id = $2;";
    const res = await pg.query(query);
    return res;
    console.log(res.rows);
  };
}
