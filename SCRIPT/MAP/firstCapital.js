const client=['reliance mall','tcs comPany'];
const ans=client.map((x)=>{
   return x.toLowerCase().split("").map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
});
console.log(ans);

