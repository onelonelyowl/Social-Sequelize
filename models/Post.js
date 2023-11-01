const {db, Sequelize} = require("../db/connection.js")

const Post = db.define("Post", {
    title: Sequelize.DataTypes.STRING,
    body: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.STRING
})

module.exports = {Post};