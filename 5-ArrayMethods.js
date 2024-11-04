// Array.find()
// Array Methods
// 13m 6s
// find, findIndex, & includes
// 02:21:19 - 02:26:12
// flat & flatMap
// 02:26:13 - 02:34:26

// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned


const arr = [5,1,2,21,2,12,12,12,1]

const found = arr.find((el) => el > 10)
console.log(found);


//findIndex
// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3



// /The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.




function ret() {
    return ['arr','brr','crr']
}

console.log(ret().includes('brr'));


// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
