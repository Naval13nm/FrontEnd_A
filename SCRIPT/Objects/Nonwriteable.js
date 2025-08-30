const medicine1 = { name: "Paracetamol" };
Object.defineProperty(medicine1, "type", { value: "Tablet", writable: false });
medicine1.type = "Capsule";
console.log(medicine1.type); // Tablet