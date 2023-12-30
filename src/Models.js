// Use CapitalCase for filenames (e.g., UserModel.js instead of users.model.js)

const UserModel = require("./modules/users/Users.model");

module.exports = {
    // Use CAPITAL_SNAKE_CASE for constants (e.g., USER_MODEL instead of UserModel)
    USER_MODEL: UserModel.User
};
