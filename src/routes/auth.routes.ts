import { Router } from "express";
const router = Router()
import {singIN, singUP} from '../controllers/user.controller';

router.post('/sign-up', singUP);
router.post('/sign-in', singIN);

export default router;