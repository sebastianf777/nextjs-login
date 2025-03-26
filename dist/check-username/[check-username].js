"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
function handler(req, res) {
    // En Vercel los parámetros se obtienen de req.query
    const { myUsername } = req.query;
    console.log(`Received username: ${myUsername}`);
    res.status(200).json({ check: true, username: myUsername });
}
