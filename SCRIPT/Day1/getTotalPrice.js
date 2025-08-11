function GetTotalPrice(...No){
return No.reduce((Total,num)=>Total+Number(num),0)
}
let result=GetTotalPrice("55","45");
console.log(result);