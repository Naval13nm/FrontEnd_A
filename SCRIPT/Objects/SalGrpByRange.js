const employeesSalary = [
  { name: "Amit", salary: 25000 },
  { name: "Neha", salary: 60000 },
  { name: "Ravi", salary: 45000 },
];
const salaryGroup = employeesSalary.reduce((acc, e) => {
  if (e.salary < 30000) acc.low.push(e.name);
  else if (e.salary <= 50000) acc.mid.push(e.name);
  else acc.high.push(e.name);
  return acc;
}, { low: [], mid: [], high: [] });
console.log(salaryGroup);