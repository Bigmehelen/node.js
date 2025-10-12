
import express from "express";

const UrlController = require("../controllers/UrlController");

router.post("/api", UrlController.createShortUrl);
router.get("/api/code", UrlController.redirectUrl);

export default router;
