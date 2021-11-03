/* B"H
*/
import { GetByHandle } from "./users";

const list = [
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Lorem Ipsom",
        time: Date(),
        user_handle: "@johnsmith",
        isPublic: true,
        description: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in .",
          ],
          tags: ["#list", "#offff", "#tags"],
    },
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "We want Moshiach Now",
        time: Date(),
        user_handle: "@vp",
        isPublic: true,
    },
    { 
        src: "https://scontent-lga3-2.xx.fbcdn.net/v/t31.18172-8/p720x720/886090_10100137903372610_773365632_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ba80b0&_nc_ohc=DWVdkKM2PwQAX_tAc5p&_nc_ht=scontent-lga3-2.xx&oh=d9d284fef84a57b1a824932d5fd2da20&oe=618A0203",
        alt: "Purim in SUB #100",
        caption: "What a purim to remember",
        time: Date(),
        user_handle: "@JewPaltz",
        isPublic: true,
    },
    { 
        src: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/s600x600/244029201_10167312248050347_4050463819121596219_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=oaf-csovSFEAX-I2hxQ&_nc_ht=scontent-lga3-2.xx&oh=8466fcd68032477fab99306ba1a6e800&oe=61895C64",
        alt: "Mug with slogan",
        caption: "Never be afraid to try something new. The ark was built by amateurs and the Titanic by professionals",
        time: Date(),
        user_handle: "@JewPaltz",
        isPublic: true,
    },
    { 
        src: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/p180x540/242759506_10102663165018030_5506732176336636339_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=LJFWaOTJXvUAX-skiU3&_nc_ht=scontent-lga3-2.xx&oh=e6a03799ccf969c3b3fe62a7b266b8b9&oe=618C38F8",
        alt: "The family",
        caption: "The whole family. All the kids hiking together. Sukkot Vacation.",
        time: Date(),
        user_handle: "@JewPaltz",
        isPublic: true,
    },
];

const listWithOwner = ()=> list.map(x => ({ 
    ...x, 
    user: GetByHandle(x.user_handle) 
}) );

export function GetAll() {
    return listWithOwner();
}

export function GetWall(handle) {
    return listWithOwner().filter(post=> post.user_handle == handle);
}

export function GetFeed(handle) { return listWithOwner()
    .filter(post=> GetByHandle(handle).following.some(f=> f.handle == post.user_handle && f.isApproved) );     }


export function Get(post_id) { return list[post_id]; }
export function Add(post) {
    if(!post.user_handle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
     list.push(post);
     return { ...post };
}
export function Update(post_id, post) {
    const oldObj = list[post_id];
    const newObj = { ...oldObj, ...post }
    list[post_id] = newObj ;
    return newObj;
}
export function Delete(post_id) {
    const post = list[post_id];
    list.splice(post_id, 1);
    return post;
} 