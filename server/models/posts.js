const Users = require("./users")
const { ObjectId } = require('bson')
const { client } = require('./mongo')

const collection = client.db(process.env.MONGO_DB).collection('posts')
module.exports.collection = collection

const list = [
    {
        userHandle: "@Quinn",
        title: "A Night of Terror",
        dateOccured: "03-09-21",
        description: "There I was... sat in the tower....",
        tags: ['spicy', 'scary', 'lucid'],
        visible: true,
        comments: []
    },
    {
        userHandle: "@JewPaltz",
        title: "Teaching Class",
        dateOccured: "02-11-20",
        description: "All at once, the room fell sillent...",
        tags: ['exciting', 'fun'],
        visible: true,
        comments: []
    },
    {
        userHandle: "@Jose",
        title: "Lorem Ipsum",
        dateOccured: "01-01-84",
        description: "This is not meant to mean a darn thing. Just a bunch of jibberish.",
        tags: ['thrilling', 'boring', 'confusing'],
        visible: true,
        comments: []
    },
    {
        userHandle: "@Quinn",
        title: "A Trip to the Dentist",
        dateOccured: "11-12-21",
        description: "All of a sudden, my teeth fell out. Horrifying!",
        tags: [],
        visible: false,
        comments: []
    },
]

const addOwnerPipeline = [
    {
        "$lookup": {
            from: "users",
            localField: 'userHandle',
            foreignField: 'handle',
            as: 'user',
        }
    },
    { $unwind: "$user" },
    { $project: { "owner.password": 0 } }
]

module.exports.GetAll = function GetAll() {
    return collection.aggregate(addOwnerPipeline).toArray()
}

module.exports.GetWall = function GetWall(handle) {
    return collection.aggregate(addOwnerPipeline).match({ userHandle: handle }).toArray()
}

// TODO: convert to MongoDB
module.exports.GetFeed = function GetFeed(handle) {
    const query = Users.collection.aggregate([
        { $match: { handle } },
        {
            "$lookup": {
                from: "posts",
                localField: 'following.handle',
                foreignField: 'userHandle',
                as: 'posts'
            }
        },
        { $unwind: '$posts' },
        { $replaceRoot: { newRoot: "$posts" } },
    ].concat(addOwnerPipeline))
    return query.toArray()
    //return listWithOwner()
    //.match(post=> GetByHandle(handle).following.some(f=> f.handle == post.user_handle && f.isApproved) )
}


module.exports.Get = function Get(post_id) { return collection.findOne({ _id: new ObjectId(post_id) }) }

module.exports.Add = async function Add(post) {
    if (!post.userHandle) {
        throw { code: 422, msg: "Post must have an Owner" }
    }
    post.datePosted = Date()

    const response = await collection.insertOne(post)

    post.id = response.insertedId

    return { ...post }
}
module.exports.Update = async function Update(post_id, post) {
    const results = await collection.findOneAndUpdate(
        { _id: new ObjectId(post_id) },
        { $set: post },
        { returnDocument: 'after' }
    )

    return results.value
}
module.exports.Delete = async function Delete(post_id) {
    const results = await collection.findOneAndDelete({ _id: new ObjectId(post_id) })

    return results.value
}

module.exports.Search = q => collection.find({ title: new RegExp(q, "i") }).toArray()

module.exports.Seed = async () => {
    for (const x of list) {
        await this.Add(x)
    }
}