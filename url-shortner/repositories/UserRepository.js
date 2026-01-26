import User from "../models/User.js";

class UserRepository {

  async create(userData) {
    return await User.create(userData);
  }

  async findByEmail(email) {
    return await User.findOne({email});
  }

  async findByUsername(username) {
    return await User.findOne({username});
  }
}
export default new UserRepository();
