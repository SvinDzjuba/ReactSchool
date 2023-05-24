import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const accessToken = authHeader && authHeader.split(' ')[1];

    if (!accessToken) return res.status(401).json({ message: 'User not authenticated!' });
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) return res.status(403).json({ message: 'Invalid token!' });
        req.email = decoded.email;
        next();
    });
};