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
        const links = await Link.find({ owner: null });
        res.json(links);
    } catch (error) {
        res.status(500).json( { message: "Try again :(" } );
    };
});
router.get("/:id", async (req, res) => {
    try {
        const link = await Link.findById(req.params.id);
        res.json(link);
    } catch (error) {
        res.status(500).json( { message: "Try again :(" } );
    };
});


module.exports = router;