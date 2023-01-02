const express = require("express");
const router = express.Router();
const {
  GetGoals,
  UpdateGoal,
  DeleteGoals,
  SetGoals,
} = require("../controllers/GoalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, GetGoals).post(protect, SetGoals);

router.route("/:id").put(protect, UpdateGoal).delete(protect, DeleteGoals);

module.exports = router;
