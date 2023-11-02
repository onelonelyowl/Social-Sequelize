const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');
const comments = require("./seed/comments.json")
const users = require("./seed/users.json")
const profiles = require("./seed/profiles.json")
const likes = require("./seed/likes.json")
const posts = require("./seed/posts.json")

describe('Social Sequelzie Test', () => {
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
        firstProfile.addUser(firstUser) //addProfile is not a function
        const firstExpectedUser = await firstProfile.getUser()
        expect(firstExpectedUser).toEqual(firstUser);
    })
    test("testing User to Post relationship 1-many", function() {
        expect(true).toBe(true);
    })
    test("testing Post to Comment relationship 1-many", function() {
        expect(true).toBe(true);
    })
    test("testing User to Likes relationship many-many", function() {
        expect(true).toBe(true);
    })




})