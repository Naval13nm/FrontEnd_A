function addNumbers(...No){
 return No.reduce((total,num)=>total+num,0);
}

let TotalSum=addNumbers(1,1,2,1);
console.log(TotalSum);


// In .reduce((total, num) => ...),
// reduce() automatically loops through the array.
// For each item:

// num gets the current element from the array

// total is the accumulated result so far
// The function returns the updated total, and reduce() keeps going.