const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
    const token = req.header("x-auth-token");

    if (!token) {
        console.log("🧨 No token found.");
        return res.json({ msg: "Authorization denied." });
    }

    try {
        const decode = jwt.verify(token, config.get("JWT_SECRET"));
        req.user = decode.user;
        // console.log("Req params: ", req.user);
        next();
    } catch (err) {
        res.sendStatus(401).json({ msg: "Token is no more valid." });
    }
};
