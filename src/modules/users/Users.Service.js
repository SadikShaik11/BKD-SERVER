
const Master = require("../../config/Master.class")
/***
 * @module userService
 * description: contains all the logic related to user login signup 
 */

class UsersService extends Master {
    constructor() {
        super()
    }
    async Signup(params) {
        try {
            this.logInfo("UsersService :Inside Signup Method")




        } catch (error) {

        }
    }

}

module.exports = new UsersService()