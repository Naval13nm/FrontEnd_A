function CombineArray(...Array){
return Array.flat(); //merge into single array
}

let Combined=CombineArray([1,2,3],[4,5,6],[7,8,9]);
console.log(Combined);
