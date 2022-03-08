import { Router } from "express";
import passport from "passport";
const router = Router()

router.get('/especial', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send('HOLA DESDE RUTA ESPECIAL');
})

export default router;