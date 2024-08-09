// singleton
// Object.create()

// object literals
const mySym = Symbol("key1")  

const user = {
    name : "amita",
    "fullName" : "Amita Gautam",
    [mySym] : "myKey1",
    age : 21,
    location : "Bhopal",
    email : "amita@google.com",
    isLoggedIn : false,
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user.fullName);
// console.log(user["fullName"]);

// console.log(user[mySym]);

user.email = "amita@github.com"
// console.log(user["email"]);
// Object.freeze(user)
user.email ="amita@microsoft.com"
// console.log(user["email"]);


user.greeting = function(){
console.log("Hello JS user");
}

user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name} `);
    }
    

// console.log(user.greeting);
console.log(user.greeting());
console.log(user.greetingTwo());









