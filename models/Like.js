const {db, Sequelize} = require("../db/connection.js")
const Like = db.define("Like", {
    reactionType: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.STRING
})

module.exports = {Like};