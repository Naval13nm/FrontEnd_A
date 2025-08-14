let phone = {
  brand: "Apple",
  model: "iPhone 16",
  price: 99999,
  
  getInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}, Price: $${this.price}`;
  }
};

console.log(phone.getInfo());


// Backticks `...`:
// Everything inside them is treated as a string — it will be printed exactly as you write it (including line breaks).

// ${ ... } inside backticks:
// Whatever JavaScript code or expression you put inside ${}, it gets executed and its result is inserted into the string.