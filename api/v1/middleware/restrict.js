import jwt from 'jsonwebtoken';
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

async function restrict(req, res, next){
    let {authorization} = req. headers;
    if(!authorization){
        return res. status (401). json({
            status: false,
            message: 'you\'re not authorized!',
            data: null
        });
    }
    
    authorization = authorization.replace('Bearer ', '');

    jwt.verify(authorization, JWT_SECRET_KEY, (err, decoded) => {
        if (err){
            return res.status(401).json({
                status: false,
                message: 'you\'re not authorized!',
                err: err.message,
                data: null
            });
        }
        req.user = decoded;
        next();
    });
};
export {restrict}; 