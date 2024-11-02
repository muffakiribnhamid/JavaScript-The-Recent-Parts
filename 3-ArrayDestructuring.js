// decomposing a structure into its individual parts.

const [name,age,...values] = ['Muffakir',18,'cd',12,121]

console.log(name);
console.log(age);
console.log(values);



function data() {
    return [1,2,3]
}

let tmp = data();
let first = tmp[0]
let second = tmp[1]
let third = tmp[2]


//destructuring method

function data2() {
    return [1,2,3]
}
let [first1,second2,third2,fourth = 10] = data();

console.log(fourth);
