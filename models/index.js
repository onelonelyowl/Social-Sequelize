const {Comment} = require("./Comment");
const {Like} = require("./Like");
const {Post} = require("./Post");
const {Profile} = require("./Profile");
const {User} = require("./User");

// hasone hasmany, belongsto, belongstomany

User.hasOne(Profile)
Profile.belongsTo(User)

User.hasMany(Post)
Post.belongsTo(User)

Post.hasMany(Comment)
Comment.belongsTo(Post)

User.belongsToMany(Like, {through: "user-likes"})
Like.belongsToMany(User, {through: "user-likes"})


module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}