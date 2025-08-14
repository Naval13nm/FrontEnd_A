const arr="I Love India";
const split=arr.split(" ").reverse();
console.log(split);
const Reverse =split.map((x)=>x.split("").reverse().join("")).join(" ");
console.log(Reverse);