const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next();
    };
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Non auth" });
        };
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Non auth" });
    }
};