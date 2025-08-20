 const staff = [
  { id: 1, name: "Pooja", role: "Nurse" },
  { id: 2, name: "Raj", role: "Doctor" },
  { id: 3, name: "Lata", role: "Nurse" },
  { id: 4, name: "Amit", role: "Receptionist" }
];


const Nurses=staff.filter((x)=>x.role==="Nurse");
console.log(Nurses);