const student = ['Raj VerMa', 'Kavita Rai'];
const email = student.map((x) => `${x.toLowerCase().split(" ").join(".")}@univ.com`);
console.log(email);


//2nd method catenation 1st is done using backticks

// const employees = ['Rita Kumar', 'Anil Roy'];

// const emails = employees.map(name =>
//   name.toLowerCase().split(" ").join(".") + "@company.com"
// );

// console.log(emails);
