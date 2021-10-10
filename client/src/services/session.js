const session = {
    user: null,
    messages: [],
    Login(email, password){

        this.user = {
            FirstName: 'Quinn',
            LastName: email,
            Password: password,
            id: 613,
        }
    }
};

export default session;

//export function