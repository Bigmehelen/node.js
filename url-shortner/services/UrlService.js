import UrlRepository from "../repositories/UrlRepository.js";
import { generateShortCode } from "../utils/UrlUtils.js";

class UrlService {

  static async createShortUrl(originalUrl) {
    console.log("This is the original URL: ", originalUrl);

    const code = generateShortCode(7);
    const shortUrl = await UrlRepository.create({ code, originalUrl });
    return {
      shortUrl: `${process.env.BASE_URL}/${code}`,
      originalUrl: shortUrl.originalUrl,
    };
  }

  static async getOriginalUrl(code) {
    return await UrlRepository.findByCode(code);
  }
}
export default UrlService;