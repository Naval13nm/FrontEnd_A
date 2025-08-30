//factorial of 5
let nums=[1,2,3,4,5];
let ans=nums.reduce((acc,x)=>(x=x*acc),1);
console.log(ans);