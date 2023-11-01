const {db, Sequelize} = require("../db/connection.js")

const Comment = db.define("Comment", {
    body: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.STRING
})
console.log(Comment)

module.exports = {Comment};