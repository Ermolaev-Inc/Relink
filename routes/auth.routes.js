const {Router} = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const {check, validationResult} = require("express-validator");
const User = require("../models/User");

router.post(
    "/register", 
    [
        check("email", "Incorrect email").isEmail(),
        check("password", "Min - 6 characters").isLength({ min: 6 })
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