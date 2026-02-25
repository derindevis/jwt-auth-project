const jwt = require("jsonwebtoken");
const SECRET_KEY = "mysecretkey";

function verifyToken(req, res, next) {
    const header = req.headers["authorization"];

    if (!header) return res.status(401).json("Access Denied");

    const token = header.split(" ")[1];

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(400).json("Invalid Token");
    }
}

module.exports = verifyToken;