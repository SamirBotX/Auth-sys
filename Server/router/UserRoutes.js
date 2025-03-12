import express from 'express';
import {GetAllUsers, Signup} from '../controllers/UserController.js';

const router = express.Router();

router.get('/users', GetAllUsers);
router.post('/signup', Signup);

export default router;