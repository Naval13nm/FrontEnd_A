const stock2 = { paracetamol: 50, aspirin: 30, insulin: 10 };
const highest = Object.entries(stock2).reduce((max, [k, v]) => v > max[1] ? [k, v] : max);
console.log( highest[0]);