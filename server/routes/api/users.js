const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post(
    "/",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Please enter a valid email address").isEmail(),
        check("password", "Password of 6 or more characters").isLength({
            min: 6,
        }),
    ],
    async (req, res) => {
        // validation check!
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            // check if user already exists.
            let user = await User.findOne({ email });
            if (user) {
                res.status(400).json({
                    errors: [{ msg: "User Already exist" }],
                });
            }
            // avatar;
            const avatar = gravatar.url(email, {
                s: "200",
                r: "pg",
                d: "mm",
            });

            user = new User({
                name,
                email,
                password,
                avatar,
            });

            // password encryption.
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();
            // jwt
            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                config.get("JWT_SECRET"),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err);
            res.status(500).send("Server err");
        }
    }
);

router.post(
    "/auth",
    [
        check("email", "Please enter a valid email address").isEmail(),
        check("password", "Password of 6 or more characters").exists(),
    ],
    async (req, res) => {
        // validation check!
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // check if user already exists.
            let user = await User.findOne({ email });
            if (!user) {
                res.status(400).json({
                    errors: [{ msg: "User Already exist" }],
                });
            }

            user = new User({
                email,
                password,
            });

            // jwt
            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                config.get("JWT_SECRET"),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    // localStorage.setItem("token", token);
                    res.json(token);
                }
            );
        } catch (err) {
            console.error(err);
            res.status(500).send("Server err");
        }
    }
);

module.exports = router;
