const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");

router.get("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.post(
    "/",
    [
        check("email", "Email is required").not().isEmpty(),
        check("password", "Password is required").exists(),
    ],
    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            res.sendStatus(400).json({ error: error.array() });
        }

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res
                    .status(400)
                    .json({ error: [{ msg: "Invalid Credenitals" }] });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res
                    .status(400)
                    .json({ error: [{ msg: "Invalid Credenitals" }] });
            }

            // payload and jwt.

            const payload = {
                user: {
                    id: user.id,
                },
            };
            jwt.sign(
                payload,
                config.get("JWT_SECRET"),
                { expiresIn: 36000 },
                (err, token) => {
                    console.log(token);
                    if (err) throw err;
                    res.josn({ token });
                }
            );
        } catch (err) {
            console.err(err);
            res.status(500).send("Server err");
        }
    }
);

module.exports = router;
