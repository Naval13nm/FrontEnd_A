const productsList = [
  { id: 1, name: "Shirt", price: 1200 },
  { id: 2, name: "Laptop", price: 50000 },
  { id: 3, name: "Shoes", price: 2500 }
];
const expensive=productsList.reduce((max,p)=>max.price>p.price?max:p);
console.log(expensive);