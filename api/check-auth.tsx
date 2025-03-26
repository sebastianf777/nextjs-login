import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {

    const { username, password } = req.body;
    console.log(`Authenticating user: ${username}`);

    if (password === "777Holis") {
        const dummyToken = "abc123";
        res.status(200).json({ token: dummyToken });
    } else {
        console.log(`Invalid credentials`);
        res.status(401).json({ error: 'Invalid credentials' });
    }
}
