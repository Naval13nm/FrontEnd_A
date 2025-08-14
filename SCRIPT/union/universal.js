const universe=[
    {id:1, name:"Naval"},
    {id:2,name:"Rahul"},
    {id:3,name:"golu"},
    {id:4, name:"Naval"},
    {id:5, name:"Naval"},
    {id:6, name:"riya"},  
]

const branchA=[
    {id:1, name:"Naval"},
    {id:2,name:"Rahul"},
    {id:3,name:"golu"},
];

const branchB=[
    {id:4, name:"Naval"},
      {id:2, name:"Rahul"},
];

const branchC=[
     {id:5, name:"Naval"},
      {id:2, name:"Rahul"},
]

 //only A
const Result1=branchA.filter((x)=>!branchB.some((y)=>x.id===y.id));
console.log(Result1);

//only B
const Result2=branchB.filter((x)=>!branchC.some((y)=>x.id===y.id));
console.log(Result2);

//only C
const Result3=branchC.filter((x)=>!branchA.some((y)=>x.id===y.id));
console.log(Result3);

//intersection
const AinterB=branchA.filter((x)=>branchB.some((y)=>x.id===y.id));
const intersection=AinterB.filter((x)=>branchC.some((y)=>x.id===y.id));
console.log(intersection);

//union
const Result=[...Result1,...Result2,...Result3,...intersection];
console.log(Result);

const NotinResult=universe.filter((x)=>!Result.some((y)=>x.id===y.id));
console.log(NotinResult);



