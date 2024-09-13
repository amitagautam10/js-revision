function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

const user1 = new createUser("amita", 25)
const user2 = new createUser("gautam", 30)

user1.printMe()