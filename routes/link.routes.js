const {Router} = reuqire("express");
const Link = require("../models/Link");
const router = Router();

router.post("/generate", async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json( { message: "Try again :(" } );
    };
});
router.get("/", async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json( { message: "Try again :(" } );
    };
});
router.get("/:id", async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json( { message: "Try again :(" } );
    };
});


module.exports = router;