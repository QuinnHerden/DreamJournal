/* B"H
*/

const list = [
    {
        id: "0",
        author: "@JewPaltz",
        reply: "Very cool dream. I cant' wait to hear more.",
        published: Date()
    }
];

export function GetAll() { return list; }
export function Get(user_id) { return list[user_id]; }
export function GetById(id) { return ({ ...list.find(x => x.id == id), password: undefined }); }

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