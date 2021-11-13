/* B"H
*/

const list = [
    {
        handle: '@JewPaltz',
        password: 'me',
        firstName: 'Moshe',
        lastName: 'Plotkin',
        visible: true,
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
        avatar: 'https://i1.sndcdn.com/avatars-000626412048-iqg5dk-t500x500.jpg',
        description: 'I am the creator of this website.',
        friendRequests: [],
        friendList: ['@Jose'],
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

export function GetAll() { return list; }
export function Get(user_id) { return list[user_id]; }
export function GetByHandle(handle) { return ({ ...list.find(x => x.handle == handle), password: undefined }); }

export function Add(user) {
    list.push(user);
    return { ...user, password: undefined };
}


export function Update(user_id, user) {
    const oldObj = list[user_id];
    if (user.firstName) {
        oldObj.firstName = user.firstName;
    }
    if (user.lastName) {
        oldObj.lastName = user.lastName;
    }
    if (user.handle) {
        oldObj.handle = user.handle;
    }
    if (user.pic) {
        oldObj.pic = user.pic;
    }
    //list[user_id] = newObj ;
    return { ...oldObj, password: undefined };
}

export function Delete(user_id) {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}

export function Login(handle, password) {
    console.log({ handle, password })
    const user = list.find(x => x.handle == handle);
    if (!user) throw { code: 401, msg: "Sorry there is no user with that handle" };

    if (!(password == user.password)) {
        throw { code: 401, msg: "Wrong Password" };
    }

    const data = { ...user, password: undefined };

    return { user: data };
}