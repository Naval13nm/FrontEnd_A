function AverageNo(...no){
    let length=no.length;//.length for getting array length
    let sum=no.reduce(function(starting,currentvalue)   {return starting+currentvalue;},0);  //reduce method to get sum of array
return sum/length;
}
let first=AverageNo(10,5);
console.log(first);

let Second=AverageNo(5);
console.log(Second);

let third=AverageNo(5,10,30);
console.log(third);


//array.reduce(function(accumulator, currentValue, currentIndex, array) {
//     // return the updated accumulator
// }, initialValue);


// Parameters:

// accumulator → the value that carries over between iterations.

// currentValue → the current element in the array.

// currentIndex (optional) → the index of the current element.

// array (optional) → the array reduce() was called on.

// initialValue → the starting value for the accumulator.

