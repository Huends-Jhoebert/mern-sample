const asyncHandler = require("express-async-handler");

//Get Goals
//@route GET /api/goals
//@access private
const GetGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get Goals",
  });
});

//Set Goals
//@route POST /api/goals
//@access private
const SetGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field!");
  }
  res.status(200).json({
    message: "Set Goals",
  });
});

//Update Goals
//@route PUT /api/goals/:id
//@access private
const UpdateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update Goal ${req.params.id}`,
  });
});

//Delete Goals
//@route DELETE /api/goals/:id
//@access private
const DeleteGoals = asyncHandler(async (req, res) => {
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
