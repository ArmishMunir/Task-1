const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
    const token = req.header("x-auth-token");

    if (!token) {
        res.send(401).json({ msg: "Authorization denied." });
    }

    try {
        const decode = jwt.decode(token, config.get("JWT_SECRET"));
        // console.log("docode: ", decode);
        req.user = decode.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is no more valid." });
    }
};
