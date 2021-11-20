import { api } from "./myFetch"



export function GetAll() {
    return api('posts')
}

export function GetWall(handle) {
    return api('posts/wall/' + handle)
}

export function GetFeed(handle) {
    return api('posts/feed/' + handle)
}

export function GetTags(tag) {
    return api('posts/journal/tags/' + tag)
}

export function Get(post_id) { return api('posts/' + post_id) }
export function Add(post) {

    return api('posts', post, 'POST')
}
// export function Update(post_id, post) {
//     return { post_id, post }
// }
export function Delete(post_id) {
    return api('posts/' + post_id, {}, 'DELETE')
}

export function addComment(post_id, comment) {
    // console.log(comment)
    return api('posts/comment/' + post_id, comment, 'POST')
}

export function Like(info) {
    // console.log(info)
    return api('posts/like', info, 'POST')
}