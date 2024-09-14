class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this. password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("amita", "amita@teacher.com", "123")
teacher1.addCourse()
teacher1.logMe()
const user1 = new User("gautam")
// user1.addCourse()
user1.logMe()

// console.log(teacher1 === user1);
// console.log(teacher1 === Teacher);
console.log(teacher1 instanceof User);
console.log(teacher1 instanceof Teacher);

