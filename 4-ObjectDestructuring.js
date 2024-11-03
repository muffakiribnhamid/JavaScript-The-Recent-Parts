// function data() {
//     return {a : 1, b: 2, c: 3,d : 2, z : 10}
// }

// var {
//     a : first,
//     b : second,
//     c : third,
//     ...fourth

// } = data()

// console.log(fourth);


//nested object destructuring



function nestedData() {
    return {
        a : 1,
        b : {
            c : 10,
            d : 20
        }
    }
}

let {
   a : first,
   b : {
    c : second,
    d : third,
   }

} = nestedData()

console.log(third);
