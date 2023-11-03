const express = require("express");
const JobController = require("../controllers/JobController");
const router = express.Router();

router.get("/jobs", JobController.getAllJobs);

module.exports = router;
