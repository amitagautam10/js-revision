const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email(){
    return this._email.toUpperCase()
    },

    set email(value){
     this._email = value
    }
}

const user2 = Object.create(User)
console.log(user2.email);
