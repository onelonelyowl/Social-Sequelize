const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');
const comments = require("./seed/comments.json")
const users = require("./seed/users.json")
const profiles = require("./seed/profiles.json")
const likes = require("./seed/likes.json")
const posts = require("./seed/posts.json")

describe('Social Sequelize Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        await db.sync({ force: true });
        await db.sync({force: true})
        await Comment.bulkCreate(comments, {returning:true})
        await User.bulkCreate(users, {returning:true})
        await Profile.bulkCreate(profiles, {returning:true})
        await Like.bulkCreate(likes, {returning:true})
        await Post.bulkCreate(posts, {returning:true})
    })

    // Write your tests here
    // Write unit tests to ensure that the connection works and the associations are set up correctly. 
    test("testing User to profile relationship 1-1", async () => {
        const firstUser = await User.findOne({where: {id: 1}})
        const firstProfile = await Profile.findOne({where:{id:1}})
        firstProfile.setUser(firstUser) 
        const firstExpectedUser = await firstProfile.getUser()
        expect(firstExpectedUser).toEqual(firstUser);
    })
    test("testing User to Post relationship 1-many", async function() { // attempt to assign multiple posts to a user then reading this
        const firstUser = await User.findOne({where:{id:1}})
        const firstTwoPosts = await Post.findAll({where:{id:1, id:2}})
        const firstPost = await Post.findOne({where: {id:1}})
        const secondPost = await Post.findOne({where:{id:2}})
        await firstUser.addPosts([firstPost, secondPost])
        const firstPostAgain = await Post.findOne({where:{id:1}})
        expect(firstPostAgain.UserId).toBe(1);
    })
    test("testing Post to Comment relationship 1-many", async function() {
        const firstComment = await Comment.findOne({where:{id:1}})
        const secondComment = await Comment.findOne({where:{id:2}})
        const thirdComment = await Comment.findOne({where:{id:3}})
        const thirdPost = await Post.findOne({where:{id:3}})
        thirdPost.addComments([firstComment, secondComment, thirdComment])
        const allComments = await Comment.findAll({where: {PostId:3}})
        expect(allComments.length).toBe(3);
    })
    test("testing User to Likes relationship many-many", async function() {
        const firstUser = await User.findByPk(1)
        const fourthUser = await User.findByPk(4)
        const firstLike = await Like.findByPk(1)
        const secondLike = await Like.findByPk(2)
        await firstUser.setLikes([firstLike, secondLike])
        await fourthUser.setLikes([firstLike, secondLike])
        const firstUserAgain = await User.findByPk(1)
        const firstUserLikes = await firstUserAgain.getLikes()
        expect(firstUserLikes.length).toBe(2);
    })
    test("testing Likes to Users relationship many-many", async function() {
        const firstUser = await User.findByPk(1)
        const fourthUser = await User.findByPk(4)
        const firstLike = await Like.findByPk(1)
        const secondLike = await Like.findByPk(2)
        await firstUser.setLikes([firstLike, secondLike])
        await fourthUser.setLikes([firstLike, secondLike])
        const firstLikeAgain = await Like.findByPk(1)
        const firstLikeUsers = await firstLikeAgain.getUsers()
        expect(firstLikeUsers.length).toBe(2);
    })




})