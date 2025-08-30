const cart = [
  { name: "Shirt", price: 1000, qty: 2 },
  { name: "Shoes", price: 2000, qty: 1 },
];
const totalCart = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log( totalCart);