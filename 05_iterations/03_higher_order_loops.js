// for of lopp

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num); 
}

const greetings = "hello world!"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);   
}

// Maps

const map = new Map()
map.set('In',"India")
map.set('USA', "United State of America")
map.set('Fr',"France")
map.set('In',"India")
// console.log(map);
for(const [key,value] of map){
    // console.log(key,':-',value); 
}
//Object
const myObj1 = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
// for(const [key,value] of myObj1){
//     // console.log(key,':-',value); 
// }

const myObj2 = {
    js : "javascript",
    cpp:  "C++",
    rb: "ruby",
    swift: "swift by apple"
}
// for in loop
for(const key in myObj2){
    // console.log(key);
    // console.log(myObj2[key]);
    // console.log(`${key} shortcut is for ${myObj2[key]}`);
    
}

const programming = ["js","rb","py","java","cpp"]
for(const key in programming){
    // console.log(programming[key]);
}
for(const key in map){
    // console.log(key);  
}

// for each loop
const coding = ["js","ruby","java","python","cpp"]
coding.forEach(function (item){
    // console.log(item);  
})

coding.forEach((program)=>{
    // console.log(program); 
})

function printMe(item){
    // console.log(item); 
}
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
//   console.log(item,index,arr);
})

const myCoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"

    },
    {
        languageName : "java",
        languageFileName : "java"

    },{
        languageName : "python",
        languageFileName : "py"

    }
]
myCoding.forEach((item)=>{
  console.log(item.languageName);
  
})