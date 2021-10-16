const session = {
    user: null,
    messages: [],
    toRoute: null,
    Login(email, password) {

        this.user = {
            FirstName: 'Quinn',
            Email: email,
            Password: password,
            id: 613,
        }
    },
};

export default session;

//export function