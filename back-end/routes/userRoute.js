import express from 'express';
import { getUsers, register, login, logout, getUser } 
    from '../controllers/userController.js';
import { refreshToken } from '../controllers/refreshToken.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/user', verifyToken, getUser);
router.post('/login', login);
router.get('/token', refreshToken);
router.post('/register', register);
router.delete('/logout', logout);

export default router;