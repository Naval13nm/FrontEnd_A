
const branchA=[
    {id:1, name:"Naval"},
    {id:2,name:"Rahul"},
    {id:3,name:"golu"},
];

const branchB=[
    {id:4, name:"Naval"},
      {id:2, name:"Rahul"}, 
      {id:1, name:"Naval"},
];

const branchC=[
     {id:5, name:"Naval"},
    {id:2, name:"Rahul"},
       {id:1, name:"Naval"},
]
 //only a
const Result1=branchA.filter((x)=>branchB.some((y)=>x.id===y.id));
// console.log(Result1);
const Result2=Result1.filter((x)=>branchC.some((y)=>x.id===y.id));
console.log(Result2);
// const Result3=branchC.filter((x)=>branchA.some((y)=>x.id===y.id));
// console.log(Result3);





















// const Result=[...Result1,...Result2,...Result3];
// console.log(Result);




