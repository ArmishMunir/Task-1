const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const mongoose = require("mongoose");
const { ObjectId } = require("mongoose");

router.get("/me", auth, async (req, res) => {
    try {
        let profile = await Profile.findOne({ user: req.user.id }).populate(
            "user",
            ["name", "avater"]
        );
        // console.log("🚀 ~ profile: ", profile);

        if (!profile) {
            return res.json({ msg: "Profile not found." });
        }

        res.json(profile);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server err");
    }
});

router.post(
    "/",
    [
        auth,
        [
            check("status", "status is required.").not().isEmpty(),
            check("skills", "skills are required").not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json({ error: error.array() });
        }
        const {
            company,
            website,
            location,
            bio,
            status,
            githubUsername,
            skills,
            youtube,
            facebook,
            linkedin,
        } = req.body;

        // creating an object with the certain fields.
        let profileField = {};
        profileField.user = req.user.id;
        if (company) profileField.company = company;
        if (website) profileField.website = website;
        if (location) profileField.location = location;
        if (bio) profileField.bio = bio;
        if (status) profileField.status = status;
        if (githubUsername) profileField.githubUsername = githubUsername;
        if (skills) {
            profileField.skills = skills;
        }
        // now for social links

        profileField.social = {};
        if (youtube) profileField.social.youtube = youtube;
        if (facebook) profileField.social.facebook = facebook;
        if (linkedin) profileField.social.linkedin = linkedin;

        try {
            let user = await Profile.findOne({ user: req.user.id });

            console.log("🚀 ~ user: ", req.user.id);
            if (user) {
                user = await Profile.findByIdAndUpdate(user, profileField, {
                    new: true,
                });

                return res.json(user);
            }

            // new profile
            user = new Profile(profileField);
            await user.save();
            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).send("Server err");
        }
    }
);

// get all profiles

router.get("/", async (req, res) => {
    try {
        let profiles = await Profile.find().populate("user", [
            "name",
            "avatar",
        ]);
        res.json(profiles);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server err");
    }
});

// get profile by user id

router.get("/user/:user_id", async (req, res) => {
    try {
        let userProfile = await Profile.findOne({
            user: req.params.user_id,
        }).populate("user", ["name", "avatar"]);
        if (!userProfile) {
            return res.status(400).json("User not found");
        }
        res.json(userProfile);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server err");
    }
});

// delete a profile

router.delete("/", auth, async (req, res) => {
    try {
        await Profile.findOneAndRemove({
            user: req.user.id,
        });
        await User.findOneAndRemove({ _id: req.user.id });
        res.json({ msg: "User removed" });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server err");
    }
});

// add education to profile

router.post(
    "/education",
    [
        auth,
        [
            check("school", "School is required.").not().isEmpty(),
            check("degree", "Degree is required.").not().isEmpty(),
            check("fieldofstudy", "fieldofstudy date is required.")
                .not()
                .isEmpty(),
            check("from", "Start date is required.").not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(400).json({ errors: errors.array() });
        }
        const { school, degree, fieldofstudy, from, to, current, description } =
            req.body;
        const education = {
            school,
            degree,
            fieldofstudy,
            from,
            to,
            current,
            description,
        };

        try {
            let profile = await Profile.findOne({ user: req.user.id });
            profile.education.unshift(education);
            await profile.save();
            res.json(profile);
        } catch (error) {
            console.error(error);
            res.status(500).send("Server err");
        }
    }
);

// delete an education

router.delete("/education/:edu_id", auth, async (req, res) => {
    console.log("🚀 ~ req.params.edu_id: ", req.params.edu_id);
    try {
        let profile = await Profile.findOne({ user: req.user.id });
        let removeIndex = profile.education
            .map((item) => item.id)
            .indexOf(req.params.edu_id);
        profile.education.splice(removeIndex, 1);
        await profile.save();
        console.log(removeIndex);
        res.json(profile);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server err");
    }
});

// add experience to profile

router.post(
    "/experience",
    [
        auth,
        [
            check("title", "Title is required.").not().isEmpty(),
            check("company", "Company is required.").not().isEmpty(),
            check("from", "From date is required.").not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, company, location, from, to, current, description } =
            req.body;
        const exp = {
            title,
            company,
            location,
            from,
            to,
            current,
            description,
        };

        try {
            let profile = await Profile.findOne({ user: req.user.id });
            profile.experience.unshift(exp);
            await profile.save();
            res.json(profile);
        } catch (error) {
            console.error(error);
            res.status(500).send("Server err");
        }
    }
);

// delete an experience

router.delete("/experience/:exp_id", auth, async (req, res) => {
    try {
        let profile = await Profile.findOne({ user: req.user.id });
        let removeIndex = profile.experience
            .map((item) => item.id)
            .indexOf(req.params.exp_id);
        profile.experience.splice(removeIndex, 1);
        await profile.save();
        res.json(profile);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server err");
    }
});

module.exports = router;
