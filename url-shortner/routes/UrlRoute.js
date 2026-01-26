import express from "express"
const router = express.Router()
import UrlController  from  "../controllers/UrlController.js"

router.post("/createShortUrl", UrlController.createShortUrl);
router.get("/redirectUrl", UrlController.redirectUrl);

export default router;
