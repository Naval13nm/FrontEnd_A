const branchA=[
    {id:1, name:"Naval"},
    {id:2,name:"Rahul"},
    {id:3,name:"golu"},
];

const branchB=[
    {id:1, name:"Naval"},
      {id:2, name:"Rahul"},
];
 //only a
const Result=branchA.filter((x)=>!branchB.some((y)=>x.id===y.id));
console.log(Result);

const Result2=[...Result,...branchB];
console.log(Result2);




