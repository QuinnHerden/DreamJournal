const Users = require("./users")
const { ObjectId } = require('bson')
const { client } = require('./mongo')

const collection = client.db(process.env.MONGO_DB).collection('posts')
module.exports.collection = collection

const list = [
    {
        userHandle: "@Quinn",
        title: "A Night of Terror",
        dateOccured: "2021-09-03",
        description: "There I was... sat in the tower....",
        tags: ['spicy', 'scary', 'lucid'],
    },
    {
        userHandle: "@JewPaltz",
        title: "Teaching Class",
        dateOccured: "2020-11-21",
        description: "All at once, the room fell sillent...",
        tags: ['exciting', 'fun'],
    },
    {
        userHandle: "@Jose",
        title: "Lorem Ipsum",
        dateOccured: "1984-01-08",
        description: "This is not meant to mean a darn thing. Just a bunch of jibberish.",
        tags: ['thrilling', 'boring', 'confusing'],
    },
    {
        userHandle: "@Quinn",
        title: "A Trip to the Dentist",
        dateOccured: "2021-12-21",
        description: "All of a sudden, my teeth fell out. Horrifying!",
        tags: ['lucid'],
    },
]

module.exports.GetAll = function GetAll() {
    // return collection.aggregate(addOwnerPipeline).toArray()
    return collection.find().toArray()
}

module.exports.GetWall = function GetWall(handle) {
    return collection.find({ userHandle: handle }).toArray()
}

module.exports.GetTags = async function GetTags(tag) {
    // console.log(tag)
    return await collection.find( { tags: tag } ).toArray()
}

// TODO: convert to MongoDB
// module.exports.GetFeed = function GetFeed(handle) {
//     const query = Users.collection.aggregate([
//         { $match: { handle } },
//         {
//             "$lookup": {
//                 from: "posts",
//                 localField: 'following.handle',
//                 foreignField: 'userHandle',
//                 as: 'posts'
//             }
//         },
//         { $unwind: '$posts' },
//         { $replaceRoot: { newRoot: "$posts" } },
//     ].concat(addOwnerPipeline))
//     return query.toArray()
//     //return listWithOwner()
//     //.match(post=> GetByHandle(handle).following.some(f=> f.handle == post.user_handle && f.isApproved) )
// }


module.exports.Get = function Get(post_id) { return collection.findOne({ _id: new ObjectId(post_id) }) }

module.exports.Add = async function Add(post) {
    // console.log(post)
    if (!post.userHandle) {
        throw { code: 422, msg: "Post must have an Owner" }
    } else if (!post.title) {
        throw { code: 422, msg: "Post must have a Title" }
    } else if (!post.dateOccured) {
        throw { code: 422, msg: "Post must have a Date" }
    } else if (!post.description) {
        throw { code: 422, msg: "Post must have a Description" }
    }

    if (!post.tags) {
        post.tags = []
    }
    
    post.comments = []
    post.likes = []

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

module.exports.Comment = async (post_id, comment) => {
    let post = await this.Get(post_id)

    post.comments.push(comment)

    const results = await collection.findOneAndUpdate(
        { _id: new ObjectId(post_id) },
        { $set: post },
        { returnDocument: 'after' }
    )

    return results.value
}

module.exports.Like = async (post_id, user_id) => {
    let user = await Users.Get(user_id)
    let post = await this.Get(post_id)
    let likes = post.likes
    
    // console.log(likes)

    let obj = likes.find(x => x.name === user.handle)
    if (obj) {
        let index = likes.indexOf(obj);
        likes.splice(index, 1)
        await this.Update(post_id, {likes: likes})
    } else {
        likes.push({name: user.handle})
        await this.Update(post_id, {likes: likes})
    }
    
    // console.log(likes)
    return

}