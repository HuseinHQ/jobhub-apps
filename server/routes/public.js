const express = require("express");
const JobController = require("../controllers/JobController");
const router = express.Router();

router.get("/jobs", JobController.getAllJobs);
router.get("/jobs/:jobId", JobController.getJobById);

module.exports = router;
