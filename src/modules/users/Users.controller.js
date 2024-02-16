import Master from '../../config/Master.class.js';
import UserService from './Users.Service.js'
import ApiError from '../../config/APIError.js';
class UserController extends Master {
    constructor() {
        super();
        Object.freeze(this);
    }
    // create a new user 
    async addUser(req, res) {
        try {
            const response = await UserService.signUp(req.body);
            res.status(this.HTTP_STATUS.CREATED).json(response);
        } catch (error) {
            this.logError("Error adding user:", error);
            if (error instanceof ApiError) {
                res.status(error.statusCode).json({ error: error.message });
            } else {
                res.status(this.HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
            }
        }
    }

    // login existing user
    async loginUser(req, res) {
        try {
            const response = await UserService.loginUser(req.body);
            res.status(this.HTTP_STATUS.CREATED).json(response);
        } catch (error) {
            this.logError("Error logging in user:", error);
            if (error instanceof ApiError) {
                res.status(error.statusCode).json({ error: error.message });
            } else {
                res.status(this.HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
            }
        }
    }
}

export default new UserController();
