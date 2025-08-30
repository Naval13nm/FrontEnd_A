const employees = [
  { id: 1, name: "Amit", dept: "IT" },
  { id: 2, name: "Neha", dept: "HR" },
  { id: 3, name: "Ravi", dept: "IT" },
];
const grouped = employees.reduce((acc, emp) => {
  (acc[emp.dept] = acc[emp.dept] || []).push(emp.name);
  return acc;
}, {});
console.log(grouped);