const express = require("express");
const router = express.Router();
const jobRoutes = require("./job");
const companyRoutes = require("./company");
const UserController = require("../controllers/UserController");
const authentication = require("../middlewares/authentication");

router.post("/login", UserController.login);

router.use(authentication);
router.post("/register");
router.use("/jobs", jobRoutes);
router.use("/companies", companyRoutes);

module.exports = router;
