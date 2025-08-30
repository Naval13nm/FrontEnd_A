const patients=[
{contacts:["66","55",[1,2],[[3,4],[5,6]]]},
{contacts:["77","11"]},
];
const ans =patients.map((p)=>p.contacts).flat(Infinity);
console.log(ans);
