"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
function handler(req, res) {
    const { username, password } = req.body;
    console.log(`Authenticating user: ${username}`);
    if (password === "777Holis") {
        const dummyToken = "abc123";
        res.status(200).json({ token: dummyToken });
    }
    else {
        console.log(`Invalid credentials`);
        res.status(401).json({ error: 'Invalid credentials' });
    }
}
