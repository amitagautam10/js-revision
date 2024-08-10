
function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
    console.log("A");    
}

// sayMyName()

// function addTwoNumbers(num1 , num2){
//      console.log(num1+num2);
     
// }

function addTwoNumbers(num1 , num2){
//    let result = num1 + num2
      return num1+num2;
  
   
    
}
const result = addTwoNumbers(2,3)
// console.log("Result: ",result);

// addTwoNumbers(3,"4")
// addTwoNumbers(3,null)

function loginUserMessage(userName = "sammy"){
    if(!userName){
        console.log("Please enter a userName");
        return
        
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("amita"));

function calculatecartPrice(val1, ...num1){    //num1   ...num1   val1,val2,...num1
    return num1
}

// console.log(calculatecartPrice(200,400,500));

const user = {
    username : "amita",
    price : 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);   
}

// handleObject(user)
// handleObjectleObject ({
//     username : "amita",
//     price : 399
// })


const myNewArray = [200,400,600,800]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,800]));

