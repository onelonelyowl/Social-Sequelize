const {db, Sequelize} = require("../db/connection.js")

const Profile = db.define("Profile", {
    bio: Sequelize.DataTypes.STRING,
    profilePicture: Sequelize.DataTypes.STRING,
    birthday: Sequelize.DataTypes.STRING
})


module.exports = {Profile};