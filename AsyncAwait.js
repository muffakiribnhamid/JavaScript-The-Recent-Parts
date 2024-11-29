//Promises 
//A promise in js represents a value that will be resolved or rejected in future

// states of a promise

// pending -> the promise is still executing
// fulfilled -> the promise is resolved successfully
// rejected -> the promise failed


// const promise = new Promise((resolve,reject) => {
//     // const success = true

//     // if(success) {
//     //     resolve('promise fullfilled')
//     // }
//     // else {
//     //     reject('failed')
//     // }


//     setTimeout(() => {
//         reject('Promise Resolved After 2 Seconds')
//     },2000)
// })


// promise
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error))



function fetchData(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error + 'error'))
    .finally(() => console.log('Api fetched successfully'))
}

// console.log(fetchData('https://dummyjson.com/products'));


//chaining with then()
//catch() for error handling
//The .finally() block runs regardless of success or failure.



//4. Advanced Promises


//promise.all()

//waits for multiple promise to return if any promise rejects it returns the rejection

const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.resolve('Third')



Promise.all([promise1,promise2,promise3])
    .then((results) => console.log(results))
    .then((error) => console.error(error))




// Promise.race()

const slowPromise = new Promise((resolve) => setTimeout(() => resolve('Slow'),3000))
const fastPromise = new Promise((resolve) => setTimeout(() => resolve('Fast'),1000))




Promise.race([slowPromise,fastPromise]).then(result => {
    console.log(result); // logs fast
    
})


// Promise.allSettled()
// Waits for all promises to settle (fulfilled or rejected).


const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Error");
const p3 = Promise.resolve("Another success");


Promise.allSettled([p1,p2,p3]).then((results) => console.log(results));




// Asynchronous programming refers to a way of writing code where tasks can run independently without blocking the main thread of execution. It allows programs to handle long-running operations (like fetching data from the internet, reading files, or querying a database) without stopping everything else from running.


// Where Is Asynchronous Used?
// Fetching data from a server (APIs)
// Reading/writing to files
// Timers and delays
// Database queries
// User interactions (e.g., waiting for a button click)



//what is async and await


// async: Marks a function as asynchronous.
// await: pauses execution inside an async function until a promise resolves or rejects




//promises

// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));


//async/await

async function fetchXData() {
    try {
        const response = await fetch('https://api.example.com/data')
        const data = await response.json()
        console.log(data);
        
    }
    catch (error) {
        console.error(error);
        
    }
    
}
fetchXData()


// Feature	            Promises	                        async/await
// Syntax Complexity	Can become hard to read (chaining).	Cleaner and more synchronous-like.
// Error Handling	    Use .catch() for errors.	        Use try...catch for errors.
// Return Value	        Returns a promise.	                Returns a promise.
