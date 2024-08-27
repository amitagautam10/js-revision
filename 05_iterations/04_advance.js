// filter 
// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//      console.log(item);
//     return item;
// })
// console.log(values);


const nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums =nums.filter((num)=> num>4)
// const newNums = nums.filter((num)=>{
//    return num>4
// })
// console.log(newNums);


// const newNums = []
// nums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


// const newNums = nums.map((num)=>{
//     return num+10
// })

// const newNums = nums
//           .map((num)=> num*10)
//           .map((num)=> num+1)
//           .filter((num)=> num>=40)
// console.log(newNums);

// reduce

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`accumulator: ${acc} and current value: ${currVal}`);
//     return acc +currVal
// },0)

const myTotal = myNums.reduce((acc,currVal)=>acc+currVal,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 1999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(priceToPay);
