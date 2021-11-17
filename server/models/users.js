const bcrypt = require('bcrypt')
const { ObjectId } = require('bson')
const { client } = require('./mongo')

const collection = client.db(process.env.MONGO_DB).collection('users')
module.exports.collection = collection

const list = [
    {
        handle: '@JewPaltz',
        password: 'me',
        firstName: 'Moshe',
        lastName: 'Plotkin',
        visible: true,
        dateCreated: Date(),
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo3I5GL9_Zd_LULXRIXTzRLlVESBnoGp8sw&usqp=CAU',
        description: 'Hello! Welcome to my profile.',
        friendRequests: [{name: '@Quinn', date: Date()}, {name: '@Jose', date: Date()}, {name: '@Quinn', date: Date()}, {name: '@Quinn', date: Date()}, {name: '@Jose', date: Date()}, {name: '@Jose', date: Date()}, {name: '@Quinn', date: Date()}, {name: '@Jose', date: Date()}, {name: '@Quinn', date: Date()}, {name: '@Quinn', date: Date()}, {name: '@Jose', date: Date()}, {name: '@Jose', date: Date()}],
        friendList: [{name: '@Quinn', date: Date()}, {name: '@Jose', date: Date()}, {name: '@Quinn', date: Date()}, {name: '@Quinn', date: Date()}, {name: '@Jose', date: Date()}, {name: '@Jose', date: Date()}, {name: '@Quinn', date: Date()}, {name: '@Jose', date: Date()}, {name: '@Quinn', date: Date()}, {name: '@Quinn', date: Date()}, {name: '@Jose', date: Date()}, {name: '@Jose', date: Date()}],
    },
    {
        handle: '@Quinn',
        password: 'herden',
        firstName: 'Quinn',
        lastName: 'Herden',
        visible: true,
        dateCreated: Date(),
        avatar: 'https://i1.sndcdn.com/avatars-000626412048-iqg5dk-t500x500.jpg',
        description: 'I am the creator of this website.',
        friendRequests: [],
        friendList: [{name: '@Jose', date: Date()}],
    },
    {
        handle: '@Jose',
        password: '123abc',
        firstName: 'Joe',
        lastName: 'Cabborane',
        visible: true,
        avatar: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F613b808be442fc75020110ff%2F0x0.jpg',
        description: 'I am a fictional character.',
        friendRequests: [],
        friendList: [],
    },
]

module.exports.GetAll = function GetAll() { return collection.find().toArray() }

module.exports.Get = user_id => collection.findOne({ _id: new ObjectId(user_id) })

module.exports.GetByHandle = (handle) => collection.findOne({ handle }).then(x => ({ ...x, password: undefined }))

module.exports.Add = async function Add(user) {
    
    if (!user.handle) {
        return Promise.reject({ code: 422, msg: "Handle is required" })
    }
    const check = await this.GetByHandle(user.handle)
    if (check.handle == user.handle) {
        return Promise.reject({ code: 422, msg: "Handle already exists" })
    }
    
    if (!user.firstName) {
        return Promise.reject({ code: 422, msg: "First Name is required" })
    } else if (!user.lastName) {
        return Promise.reject({ code: 422, msg: "Last Name is required" })
    } else if (!user.lastName) {
        return Promise.reject({ code: 422, msg: "Visibility is required" })
    }

    if (!user.avatar) {
        user.avatar = "https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300"
    }
    if (!user.description) {
        user.description = "Welcome to my profile :)"
    }

    const hash = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS)

    console.log({
        user, salt: process.env.SALT_ROUNDS, hash
    })

    user.password = hash
    user.friendRequests=[]
    user.friendList=[]
    user.dateCreated = Date()

    const user2 = await collection.insertOne(user)
    user._id = user2.insertedId

    return { ...user, password: undefined }
}


module.exports.Update = async function Update(user_id, user) {

    const results = await collection.findOneAndUpdate(
        { _id: new ObjectId(user_id) },
        { $set: user },
        { returnDocument: 'after' }
    )
    console.log({ user_id, results })

    return { ...results.value, password: undefined }
}

module.exports.Delete = async function Delete(user_id) {
    const results = await collection.findOneAndDelete({ _id: new ObjectId(user_id) })

    return results.value
}

module.exports.Login = async function Login(handle, password) {
    console.log({ handle, password })
    const user = await collection.findOne({ handle })
    if (!user) {
        return Promise.reject({ code: 401, msg: "Sorry there is no user with that handle" })
    }

    const result = await bcrypt.compare(password, user.password)

    if (!result) {
        throw { code: 401, msg: "Wrong Password" }
    }

    // const data = { ...user, password: undefined }

    return { "user": user }
}

module.exports.Seed = async () => {
    for (const x of list) {
        await module.exports.Add(x)
    }
}