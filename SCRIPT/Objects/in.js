// checks whether the property "z" exists in the object obj, either as its own property or inherited through the prototype chain.

const obj = { x: 10, y: "z" };
console.log("z" in obj);