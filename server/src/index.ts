import express from "express";
import EventController from "./controllers/event.controller";
import OrganizerController from "./controllers/organizer.controller";
import RewardProgramController from "./controllers/rewardProgram.controller";
import UserRewardController from "./controllers/userReward.controller";
import * as pg from "./pgConfig";
import Cors from "cors";

const app = express();
const port = 4000;
const corsOptions = {
  origin: true,
  allowedHeaders: ["*"],
};
app.use(Cors(corsOptions));

const eventController = new EventController();
const organizerController = new OrganizerController();
const rewwardProgramController = new RewardProgramController();
const userRewardController = new UserRewardController();

app.get("/event", eventController.getEvents);
app.post("/event", eventController.createEvent);
app.put("/event", eventController.updateEvent);
app.delete("/event/:id", eventController.deleteEvent);

app.get("/organizer", organizerController.getOrganizers);
app.post("/organizer", organizerController.createOrganizer);
app.put("/organizer", organizerController.updateOrganizer);
app.delete("/organizer/:id", organizerController.deleteOrganizer);

app.get("/rewardProgram", rewwardProgramController.getRewardPrograms);
app.post("/rewardProgram", rewwardProgramController.createRewardProgram);
app.put("/rewardProgram", rewwardProgramController.updateRewardProgram);
app.delete("/rewardProgram/:id", rewwardProgramController.deleteRewardProgram);

app.get("/userReward", userRewardController.getUserRewards);
app.post("/userReward", userRewardController.createUserReward);
app.put("/userReward", userRewardController.updateUserReward);
app.delete("/userReward/:id", userRewardController.deleteUserReward);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
