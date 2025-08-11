//solved using whithout rest operator(...)
// function makesandwich(NO1="",NO2=""){
//   let sum= Number(NO1)+Number(NO2);
//   return sum;
// }


// let result=makesandwich("3000","10");
// console.log(result);


//Using Rest operator

function sumNO(...nums) {
  return nums.reduce((total, num) => total + Number(num), 0);
  //reduce usedto reduce array in single value by repeatedly applying a function 
  // array.reduce(callbackFunction, initialValue)
  // callback function = (total, num) => total + Number(num)
  // total: the accumulated result so far
  // num: the current number in the loop
  // Number(num): ensures any string input is treated as a number
  // initial value=0;
}
let result = sumNO("12", "12", "6");
console.log(result);