import User from '../models/user.js';
import jwt from 'jsonwebtoken';

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401);
        const user = await User.findOne({
            where: { refresh_token: refreshToken }
        });
        if (!user) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            const accessToken = jwt.sign({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
            res.json({ accessToken });
        });
    } catch (error) {
        console.error(error);
    }
};