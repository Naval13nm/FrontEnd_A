function findMAx(...No){
   let Ans=No.map(Number).reduce((a,b)=>a>b?a:b)
   return Ans;
}

let Client=findMAx("1","5","2");
console.log(Client);
//The map() method creates a new array by applying a function to each element of the original array.

// Here, Number is being passed as the function. This means:
// ➡️ Each item in the array will be converted to a number using the Number() function.

// "1" becomes 1

// The reduce() method reduces the array to a single value. It takes a callback and applies it across the array items.