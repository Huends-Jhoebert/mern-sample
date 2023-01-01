const express = require("express");
const router = express.Router();
const {
  GetGoals,
  UpdateGoal,
  DeleteGoals,
  SetGoals,
} = require("../controllers/GoalController");

router.route("/").get(GetGoals).post(SetGoals);

router.route("/:id").put(UpdateGoal).delete(DeleteGoals);

module.exports = router;
