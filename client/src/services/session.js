import router from "../router";
import { GetByHandle, Login, RequestSend } from "./users";
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";

const session = {
    user: null,
    messages: [],
    toRoute: '/journal/global',
    profile: null,
    journal: "global",
    tag: 'lucid',
    foreign: '@Quinn',

    async addFriend(alphaHandle, betaHandle) {
        const alphaUser = await GetByHandle(alphaHandle)

        try {
            if (alphaHandle == betaHandle) {
                throw ("You cannot friend yourself")
            } else if (alphaUser.friendList.some(e => e.name === betaHandle)) {
                throw ("You are already friends")
            } else if (alphaUser.friendRequests.some(e => e.name === betaHandle)) {
                throw ("You already sent a request")
            }

            RequestSend(alphaHandle, betaHandle)
            // const response = await RequestSend(alphaHandle, betaHandle)
            // console.log(response)

        } catch (error) {
            this.Error(error)
        }
    },


    async Login(handle, password) {

        try {
            const response = await Login(handle, password);

            this.user = response.user;
            router.push(this.toRoute);

        } catch (error) {
            this.Error(error);
        }
    },
    Error(error) {
        console.error(error);
        const msg = error.msg ?? error;

        this.messages.push({ text: msg, type: 'warning' })
        NotificationProgrammatic.open({
            duration: 5000,
            message: msg,
            variant: 'warning',
            type: 'warning',
            closable: true,

        })

    }
};

export default session;