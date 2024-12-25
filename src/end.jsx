// server/routes/companies.js
const express = require("express");
const router = express.Router();
const Company = require("../models/Company");

router.get("/", async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

router.post("/", async (req, res) => {
  const newCompany = new Company(req.body);
  await newCompany.save();
  res.status(201).json(newCompany);
});

module.exports = router;
