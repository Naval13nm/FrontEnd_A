let arr=[1,2,2,55,0,8];
let max=arr.reduce((x,acc)=>(x>acc?x:acc),arr[0]);
console.log(max);
let min=arr.reduce((x,acc)=>(x<acc?x:acc),arr[0]);
console.log(min);

//using maths and spread operator
// let maxVal = Math.max(...arr);
// let minVal = Math.min(...arr);

// console.log(maxVal); // 55
// console.log(minVal); // 0