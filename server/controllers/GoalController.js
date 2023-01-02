const asyncHandler = require("express-async-handler");

const Goal = require("../models/GoalModel");
const User = require("../models/UserModel");

//Get Goals
//@route GET /api/goals
//@access private
const GetGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({
    user: req.user.id,
  });

  res.status(200).json(goals);
});

//Set Goals
//@route POST /api/goals
//@access private
const SetGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field!");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

//Update Goals
//@route PUT /api/goals/:id
//@access private
const UpdateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);

  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the login user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateGoal);
});

//Delete Goals
//@route DELETE /api/goals/:id
//@access private
const DeleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);

  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the login user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goal.remove();

  res.status(200).json({
    message: `Delete Goal ${req.params.id}`,
  });
});

module.exports = {
  GetGoals,
  UpdateGoal,
  SetGoals,
  DeleteGoals,
};
