// const tinderUser = new Object()  singleton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "amita",
            lastName : "gautam"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}
const obj4 = {7:"g", 8:"h"}


// const obj3 = {obj1,obj2}
// const obj = Object.assign(obj1,obj2)
// const obj = Object.assign({},obj1,obj2,obj3,obj4)
const obj = {...obj1,...obj2,...obj3}
// console.log(obj);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedin'));








