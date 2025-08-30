const employeesArr = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Neha" }
];
const empObj = employeesArr.reduce((acc, e) => {
  acc[e.id] = e;
  return acc;
}, {});
console.log( empObj);