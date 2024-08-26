//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        // console.log(`${i} is the best number`); 
    }
    // console.log(element);
}

for(let i=1;i<=10;i++){
    // console.log(`Outer loop value ${i}`);
    for(let j=1;j<10;j++){
        // console.log(`Inner loop value ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
}

let myArr = ["flash", "batman", "superman"]
for(let i=0;i<myArr.length;i++){
    // console.log(myArr[i]);    
}

// break and continue keyword

// for(let i=0;i<=20;i++){
//     if(i==5){
//         console.log(`Detected ${i}`); 
//         break;
//     }
//     console.log(`Value of i is ${i}`);
    
// }


for(let i=0;i<=20;i++){
    if(i==5){
        console.log(`Detected ${i}`); 
        continue;
    }
    console.log(`Value of i is ${i}`);
    
}