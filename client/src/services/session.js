import router from "../router";
import { Login } from "./users";
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";

const session = {
    user: null,
    messages: [],
    toRoute: null,
    userProfile: null,
    Login(handle, password){

        try {
            const response = Login(handle, password);

            this.user = response.user;
    
            router.push(this.toRoute);
                
        } catch (error) {
            this.messages.push({ text: error.msg, type: 'warning' })
            NotificationProgrammatic.open({
                duration: 5000,
                message: error.msg,
                variant: 'warning',
                type: 'warning',
                closable: true,

            })
        }


    }
};

export default session;