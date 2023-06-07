const { generateToken } = require("../middlewares/authMiddleware");

class LoginService {
  constructor() {
  }

  async login(email, password) {
   
    return generateToken({ email, password });

  }
}

module.exports = new LoginService();