const name = "amita"
const repoCount = 50

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('amita')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,4)
console.log(anotherString);

const newString1 = "     amita    "
console.log(newString1);
console.log(newString1.trim());


const url = "https://amita.com/amita%20gautam"
console.log(url.replace('%20','-'))
console.log(url.includes('amita'));
console.log(url.includes('aditya'));

console.log(gameName.split('-'));





