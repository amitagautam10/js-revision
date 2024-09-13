let myName = "amita     "


// console.log(myName.trim().length);
// console.log(myName.truelength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        // console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.amita = function(){
    // console.log(`amita is present in all objects`);
}

Array.prototype.heyamita = function(){
    // console.log(`Amita says hello`);
}
// heroPower.amita()
myHeros.amita()
myHeros.heyamita()
// heroPower.heyamita()

// inheritance
const user = {
    name: "amita",
    email: "amita@goggle.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = "amitagautam       "
String.prototype.trueLength = function(){
    console.log(`${this}`); 
    console.log(`true length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"amita".trueLength()
"gautam".trueLength()