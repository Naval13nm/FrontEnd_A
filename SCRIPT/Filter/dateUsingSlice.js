let Todaydate=new Date();
console.log(Todaydate);
console.log(typeof Todaydate);

let Stringdate=Todaydate.toISOString();// that's why we use this =>2025-08-28T00:04:21.965Z
// let Stringdate=Todaydate.toString(); => give ans chnages the format of input Thu Aug 28 2025 05:27:34 GMT+0530 (India Standard Time)
console.log(Stringdate);
console.log(typeof Stringdate);

let OnlyDate=Stringdate.slice(0,10);
console.log(OnlyDate);

let OnlyTime=Stringdate.slice(11,19);
console.log(OnlyTime);