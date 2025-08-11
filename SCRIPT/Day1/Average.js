function AverageNo(...no){
    let length=no.length;
    let sum=no.reduce(function(starting,currentvalue){return starting+currentvalue;},0);
return sum/length;
}
let first=AverageNo(10,5);
console.log(first);

let Second=AverageNo(5);
console.log(Second);

let third=AverageNo(5,10,30);
console.log(third);