const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
    const token = req.header("x-auth-token");

    if (!token) {
        res.sendStatus(401).json({ msg: "Authorization denied." });
    }

    try {
        const decode = jwt.decode(token, config.get("JWT_SECRET"));
        console.log("Req params: ", req.user);
        req.user = decode.user;
        next();
    } catch (err) {
        res.sendStatus(401).json({ msg: "Token is no more valid." });
    }
};
