const { Comment, Like, Post, Profile, User } = require("./models/index");
const comments = require("./seed/comments.json")
// const fs = require('fs');
// const seedComment = JSON.parse(fs.readFileSync('./seed/comments.json'));

console.log(JSON.stringify(comments))
async function index(){
    await Comment.bulkCreate(comments, {returning:true})
    console.log(Comment.findAll())
    // const firstComment = await Comment.create({body: "BODY OF DA COMMENT", createdAt: "dateandtimehere"})
    // const allComments = await Comment.findAll()
    // console.log(firstComment)
    // console.log(allComments)
}
index()
module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}