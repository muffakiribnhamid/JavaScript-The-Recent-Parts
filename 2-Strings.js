//Template Strings

//the old way
let name = 'John'
let age = 25
let sentence = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.'

//the new way or the template string way
let sentence2 = `Hello, my name is ${name} and I am ${age} years old.`

//In template strings, you can use backticks to create a string.

//Tagged Templates
// tagged template literals are a way to parse template literals with a function, called a tag. This function can process the template literal and return a modified result. Here's how they work:


function format(string, ...values) {
    return string.reduce((acc,str,i) => acc + str + (values[i] ? values[i].toUpperCase() : ''), '')
}



const user = 'John'
const action = 'Logged In'

const string = format`The user ${user} has ${action}`
console.log(string);




function upper(string, ...values) {
    return string.map((str,i) => str + (values[i] ? values[i].toUpperCase() : "")).join()
}

let username = "muffakir"
let twitter = "HamidMuffakir"
let topic = "JS recent parts"


const output = upper`Hello ${username} (@${twitter}) Welcome to ${topic}`

console.log(output);


//string padding -> ES2017
//string trimming -> ES2019



//PADDING
let strPad = "Muffakir"
console.log(strPad.padStart(10,'->'));
console.log(strPad.padEnd(10,'<-'));


//trimming

let strTrim = "    Hello World     I am Coder             "

console.log(strTrim.trim());
console.log(strTrim.trimEnd());
console.log(strTrim.trimStart());
