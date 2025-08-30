const patients=[
{contacts:["66","55"]},
{contacts:["77","11"]},
];
const ans =patients.flatMap((p)=>p.contacts).map((p)=>`91${p}`);

console.log(ans);