const session = {
    user: null,
    messages: [],
    toRoute: null,
    Login(handle, password) {
        this.user = {
            FirstName: 'Quinn',
            Handle: handle,
            Email: null,
            Password: password,
            id: 613,
        }
    },
};

export default session;

//export function