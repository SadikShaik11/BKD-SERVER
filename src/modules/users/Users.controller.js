const Master = require("../../config/Master.class");
const UserService = require('./Users.Service')

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
            res.status(this.HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: "Failed to add user" });
        }
    }
    // login existing user
    async loginUser(req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserService.findUserByEmail(email);

            if (!user || user.password !== password) {
                throw new Error("Invalid credentials");
            }
            res.status(200).json({ message: "User logged in successfully", user });
        } catch (error) {
            this.logger.error("Error logging in user:", error);
            res.status(401).json({ error: "Invalid credentials" });
        }
    }
}

module.exports = new UserController();
