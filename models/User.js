const {db, Sequelize} = require("../db/connection.js")

let User = db.define("User", {
    username: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING
})


module.exports = {User};