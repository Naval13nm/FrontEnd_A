const Student=['RaHul Sharma', 'Anita Das'];
// console.log(typeof Student);
const ans=Student.map((x)=>x.toLowerCase().split(" ").join("."));
console.log(ans);

