const {Router} = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const {check, validationResult} = require("express-validator");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("config")

router.post(
    "/register", 
    [
        check("email", "Incorrect email"),
        check("password", "Min - 6 characters").isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            console.log("Body:", req.body)
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect"
                });
            };
            const {email, password} = req.body
            const candidate = await User.findOne({ email });
            if (candidate) {
                return res.status(400).json({ message: "This email is already registered" });
            };
            hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ email, password: hashedPassword });
            await user.save();
            res.status(201).json({ message: "The user is created" });
        } catch (error) {
            res.status(500).json( { message: "Try again :(" } );
        };
});

router.post(
    "/login", 
    [
        check("email", "Incorrect email"),
        check("password", "Incorrect password").exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect"
                 });
            }; 
            const {email, password} = req.body;
            const user = await User.findOne({ email });
            if (!user) {
              return res.status(400).json({ message: "Error :(" })  
            };
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Password doesn't match" })
            };
            const token = jwt.sign(
                { userId: user.id },
                config.get("jwtSecret"),
                { expiresIn: "1h" }
            );
            res.json({ token, userID: user.id });
        } catch (error) {
            res.status(500).json( { message: "Try again :(" } );
        };
});

module.exports = router;
