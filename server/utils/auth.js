const jwt = require("jsonwebtoken");

const secret = "hashsecret";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
<<<<<<< HEAD
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
=======

    console.log(`Headers ${req.headers.authorization}`);

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();

      console.log(token);
>>>>>>> 78643c82fbd6cdf26f940bb723f90dcbb5311ee9
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },

  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
