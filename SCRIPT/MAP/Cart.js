const item=['Mouse','Keyboard'];
const summary=item.map(x=>({
    item:x,
    quantity:1,
}));
console.log(summary);


// for diff quantity

// const items = ['Mouse', 'Keyboard'];
// const quantities = [2, 5]; // quantities in the same order

// const summary = items.map((x, i) => ({
//   item: x,
//   quantity: quantities[i]
// }));

// console.log(summary);
