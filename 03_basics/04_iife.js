// Immediately Invoked Function Expressions (IIFE)

// function one(){
//     console.log("DB Connected");
    
// }
// one()

(function one(){
    // named iife
    console.log("DB Connected One");
    
})();


((name)=>{
     // iife 
    console.log(`DB Connected Two ${name}`);
    
})('amita')

