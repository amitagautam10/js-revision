const user = {
    username : "amita",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "amita"
//     console.log(this.username);
    
// }
// one()

// const one  = function(){
//     let username = "amita"
//     console.log(this.username);
// }
// one()

const one  = () => {
    let username = "amita"
    console.log(this);
}
// one()

// const addTwo = (num1,num2) => {
//      return num1+num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = () => ({username:"amita"})

console.log(addTwo());



