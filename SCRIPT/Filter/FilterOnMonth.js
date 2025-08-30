const lectures = [
  { id: 1, topic: "React Basics", date: "2025-04-28" },
  { id: 2, topic: "Redux", date: "2025-05-02" },
  { id: 3, topic: "TypeScript", date: "2025-05-05" },
  { id: 4, topic: "Node.js", date: "2025-03-30" },
 { id: 5, topic: "Python", date: "2025-02-15" }
];

let ANS=lectures.filter((x)=>x.date.split("-")[1]==="03");
// let ANS = lectures.filter(x => new Date(x.date).getMonth() + 1 === 3); in above case it is only computing for  string of format 03 if it is 3 it fails to do so so we use new date to store string in new inside Date and using get month we get the month and add 1 bcz in js index st from 0 and for march we will get 2 so add 1 and compare it with 3
    
//  another way using slice 
// let ans=lectures.filter((x)=>x.date.slice(0,7)==="2025-03");
// console.log(ans);

console.log(ANS);