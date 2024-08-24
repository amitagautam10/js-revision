const userEmail = "amita.ai"
if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email");  
}

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN.

// truthy values
// "0", "false", " ", [], {}, function(){}.

const arr = []
if(arr.length === 0){
    console.log("Array is empty");   
}

const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}