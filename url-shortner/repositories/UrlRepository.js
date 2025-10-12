import Url from "../models/Url.js";

export default {
  async create({ code, originalUrl }) {
    return await Url.create({ shortCode: code, originalUrl });
  },
  async findByCode(code) {
    return await Url.findOne({ shortCode: code });
  },
};
