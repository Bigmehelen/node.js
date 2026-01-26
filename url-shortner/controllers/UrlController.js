import UrlService from '../services/UrlService.js'

const createShortUrl = async (req, res) =>{
    try {
      console.log("This is the request body: ", req.body);
      const {originalUrl} = req.body;
      const shortUrl = await UrlService.createShortUrl(originalUrl);
      return res.status(201).json(shortUrl);
    } catch (err){
      return res.status(400).json({ error: err.message });
    }
  }

 const redirectUrl = async (req, res) =>{
    try {
      const {code} = req.params;
      const url = await UrlService.getOriginalUrl(code);
      if (!url) return res.status(404).json({ message: "URL not found" });
      return res.redirect(url.originalUrl);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }


 export default {
  createShortUrl,
  redirectUrl
};


