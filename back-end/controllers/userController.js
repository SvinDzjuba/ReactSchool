import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email', 'role']
        });
        res.json(users);
    } catch (error) {
        console.error(error);
    }
};
export const getUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.body.email
            },
            attributes: ['id', 'name', 'email', 'role']
        });
        res.json(user);
    } catch (error) {
        console.error(error);
    }
};
export const register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords does not match!' });
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        const user = await User.create({
            name,
            email,
            password: hashPassword,
        });
        res.json({ message: 'Registration successful!' });
    } catch (error) {
        console.error(error);
    }
};
export const login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(404).json({ message: 'Invalid credentials!' });
        const accessToken = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
        const refreshToken = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email
        }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
        await User.update(
            { refresh_token: refreshToken },
            { where: { id: user.id } }
        );
        res.cookie('refreshToken', refreshToken,
            {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({ message: 'Email not found!' });
    }
};
export const logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await User.findOne({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user) {
        res.clearCookie('refreshToken');
        return res.sendStatus(204);
    }
    await User.update(
        { refresh_token: null },
        { where: { id: user.id } },
        200);
};