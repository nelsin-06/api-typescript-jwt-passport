import {Strategy, ExtractJwt, StrategyOptions} from 'passport-jwt';
import EV from '../config/variablesEntorno';
import usuarioModel from '../models/user.model';

const opst: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: EV.jsonwebtoken, 
}

export default new Strategy(opst, async (payload, done) => {
    try {
        const user = await usuarioModel.findById(payload.id);
        if(user){
            return done(null, user);
        }
        return done (null, false)
    } catch (error) { 
        console.error(error);
    }
})