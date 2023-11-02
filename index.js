const { db } = require("./db/connection");
const { Comment, Like, Post, Profile, User } = require("./models/index");


// const comments = require("./seed/comments.json")
// const users = require("./seed/users.json")
// const profiles = require("./seed/profiles.json")
// const likes = require("./seed/likes.json")
// const posts = require("./seed/posts.json")
// // const fs = require('fs');
// // const seedComment = JSON.parse(fs.readFileSync('./seed/comments.json'));

// // console.log(JSON.stringify(comments))
// async function populate(){
//     await db.sync({force: true})
//     await Comment.bulkCreate(comments, {returning:true})
//     await User.bulkCreate(users, {returning:true})
//     await Profile.bulkCreate(profiles, {returning:true})
//     await Like.bulkCreate(likes, {returning:true})
//     await Post.bulkCreate(posts, {returning:true})
// }
// populate()


module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}