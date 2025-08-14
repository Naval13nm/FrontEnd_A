const arr1=[1,2,3,4];
const arr2=[4,5,6,7];

// const SetA= arr1.filter((x)=>!arr2.includes(x));
// console.log(SetA);

// const SetB=arr2.filter((x)=>!arr1.includes(x));
// console.log(SetB);

// const Intersection=arr2.filter((x)=>arr1.includes(x));
// console.log(Intersection);

// const Union=[...SetA,...SetB,...Intersection];
// console.log(Union);

// const Add=[...arr1,...arr2];
// console.log(Add);
// const Union2=Add.filter((x=>!Intersection.includes(x));
// console.log(Union2);

const Result=[...new Set([...arr1,...arr2])];
console.log(Result);