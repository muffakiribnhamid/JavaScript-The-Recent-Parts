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