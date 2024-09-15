class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }


    get email(){
       return this._email.toUpperCase()
    }

    set email(value){
       this._email = value
    }
    get password(){
       return `${this._password}amita`
    }

    set password(value){
        this._password = value
    }
}

const amita = new User("a@amita.ai", "Abc")
console.log(amita.password);
console.log(amita.email);
