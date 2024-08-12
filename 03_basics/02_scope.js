var c = 300
let a = 100
const b = 200
if(true){
    let a = 10
    const b = 20
    var c = 30    
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "amita"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "amita"
    if(username == "amita"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

console.log(addOne(5));

function addOne(num){
    return num+1
    
}

console.log(addTwo(5));

const addTwo = function(num){
    return num+2
}
