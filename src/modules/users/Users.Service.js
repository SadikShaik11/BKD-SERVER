
const Master = require("../../config/Master.class")
/***
 * @module userService
 * description: contains all the logic related to user login signup 
 */
class UsersService extends Master {
    constructor() {
        super()
        Object.freeze(this);
    }
    async signUp(userObj) {
        try {
            this.logger.info("UserService: Inside signUp Method");
            if (!userObj.email || !userObj.password) {
                console.log(userObj)


            }
            // const newUser = await User.create(params);
            return true;
        } catch (error) {
            this.logError("UserService: Error in signUp", error);
            throw new Error("Failed to sign up");
        }
    }

}

module.exports = new UsersService()