class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`UserName is ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const amita = new User("amita")
// console.log(amita.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const gautam = new Teacher("gautam", "gautam@phone.com")
gautam.logMe()
// console.log(gautam.createId());

