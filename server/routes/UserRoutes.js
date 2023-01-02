const express = require("express");
const router = express.Router();

const {
  RegisterUser,
  LoginUser,
  GetMe,
} = require("../controllers/UserController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", RegisterUser);
router.post("/login", LoginUser);
router.get("/me", protect, GetMe);

module.exports = router;
