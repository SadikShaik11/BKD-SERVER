// const passport = require('passport');
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');

const authUser = () => async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        const bearer = header.split(' ');
        const token = bearer[1];
        const { secret } = config.jwt;
        const payload = jwt.verify(token, secret);
        const subid = payload.sub;
        req.SubjectId = subid;
        // const bancheck = await checkBanned(subid);
        // console.log(bancheck)
        // const sessionbancheck = await SessionCheck(token);
        next();
        // else if (sessionbancheck === true) {
        //   res.status(httpStatus.UNAUTHORIZED).json({ message: 'Session Expired Login Again' });
        // } else {
        //   next();
        // }
    } catch (error) {
        res.status(httpStatus.UNAUTHORIZED).json({ message: 'Forbidden Error' });
    }
};

module.exports = authUser;