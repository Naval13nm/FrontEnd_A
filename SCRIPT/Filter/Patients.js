const patients = [
  { id: 1, name: "Rohan", admitted: true },
  { id: 2, name: "Anjali", admitted: false },
  { id: 3, name: "Vikram", admitted: true },
  { id: 4, name: "Sita", admitted: false }
];
const PatientAdmitted=patients.filter((x)=>x.admitted===true);
console.log(PatientAdmitted);