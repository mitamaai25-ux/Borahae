javascript
const express = require("express");
const router = express.Router();
const btsData = require("../data/bts.json");

router.get("/", (req, res) => res.json(btsData));
router.get("/members", (req, res) => res.json(btsData.members));
router.get("/discography", (req, res) => res.json(btsData.discography));
router.get("/timeline", (req, res) => res.json(btsData.timeline));
router.get("/lyrics", (req, res) => res.json(btsData.lyricsExcerpts));

module.exports = router;
