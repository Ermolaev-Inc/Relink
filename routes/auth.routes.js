const {Router} = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.post("/register", async (req, res) => {
    try {
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

router.post("/login", async (req, res) => {

});

module.exports = router;