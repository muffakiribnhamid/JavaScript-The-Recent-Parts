//Iterators and Generators

//Iterators -> If you have a data source and you want to access data one by one you can use iterators


let str = "Hello"
let world = "World"

let it1 = str[Symbol.iterator]();
let it2 = world[Symbol.iterator]();

console.log(it1.next());
console.log(it1.next()); 
console.log(it1.next().value); //l
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());

// { value: 'H', done: false }
// { value: 'e', done: false }
// { value: 'l', done: false }
// { value: 'l', done: false }
// { value: 'o', done: false }
// { value: undefined, done: true }

//when completed : done : true




var loopStr = "Hello"
for(
    let it = str[Symbol.iterator](),v,result;
    (result = it.next()) && !result.done && (v = result.value || true);

) {
    console.log(v);
    
}

//objects don't have a iterators

let obj = {
    a : 1,
    b : 2,
    c : 3
}

// let ob1 = obj[Symbol.iterator]()

// for(let v of obj) {
//     console.log(v);
    
// } //error : obj is not iterable



// using iterators with objects

// creating a custom iterator

const objectIterator = {
    a : 1,
    b : 2,
    c : 3,
    [Symbol.iterator]()  { // defines how the object should be iterated
        const entries = Object.entries(this) // creates an array of key = value pairs
        let index = 0; // keeps a track of iterating

        return { // returns a function with next method
            next() {
                if(index < entries.length) { //Condition Check: Each time next() is called, it checks if index is less than entries.length
                    const [key,value] = entries[index++]
                    return {value : [key,value], done : false}
                }
                else {
                    return {done : true}
                }
            }
        }
    }
}

// now we can directly iterate over object

for(const [key,value] of objectIterator) {
    console.log(key,value);
    

}
//generators in js are special functions that allow you to control the flow of execution and produce multiple values over time
//generators are defined using the function* syntax and can yield values at a time, allowing you to pause and resume execution


//declaring a generator function

function* myGen() {
    yield 1;
    yield 2;
    yield 3;
}


//In this example, myGenerator is a generator function. Unlike regular functions,
//when you call a generator function, it doesn’t run the code inside immediately. 
// Instead, it returns an iterator called a generator object, which you can use to control execution.

const gen = myGen()
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());



//Passing Arguments to yield

function* counter() {
    let count = 0;
    while(true) {
        count += yield count;
    }
}



const countGen = counter()
console.log(countGen.next().value);
console.log(countGen.next(5).value);
console.log(countGen.next(10).value);




/*
Summary Table
Feature	                Iterator	                Generator
Definition	            Object with next() method	Function with function* syntax
Creation	            Manually	                Using function* and yield
Syntax	                Requires custom next()	    Uses yield to handle iteration
State Management	    Manual	                    Automatic with yield
Lazy Evaluation	        Possible but manual	        Built-in
Two-Way Communication	Not by default	            Supports via next(value)
Return Value	        Not standard	            return can provide final value
*/