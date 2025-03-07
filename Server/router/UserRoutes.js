import express from 'express';
import {GetAllUsers} from '../controllers/UserController.js';

const router = express.Router();

router.get('/users', GetAllUsers);

export default router;