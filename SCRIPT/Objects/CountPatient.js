const patients = [
  { id: 1, name: "Amit", disease: "Flu" },
  { id: 2, name: "Riya", disease: "Diabetes" },
  { id: 3, name: "Sam", disease: "Flu" },
];
const diseaseCount = patients.reduce((acc, p) => {
  acc[p.disease] = (acc[p.disease] || 0) + 1;
  return acc;
}, {});
console.log( diseaseCount); 