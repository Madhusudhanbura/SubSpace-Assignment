const express = require("express");
const router = express.Router();

const { searchBlogs } = require("../controllers/searchBlogs");
const { getBlogs } = require("../middleware/getBlogs");

router.post("/blog-search", getBlogs, searchBlogs);

module.exports = router;
