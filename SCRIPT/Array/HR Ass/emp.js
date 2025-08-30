let emp = { name: "Sara" };   // emp stores a reference → { name: "Sara" } in the heap
let anotherEmp = emp;         // anotherEmp gets the *same reference*, not a copy
anotherEmp.name = "Raj";      // modifies the object in the heap
console.log(emp.name);        // Reads from the *same* object → "Raj"