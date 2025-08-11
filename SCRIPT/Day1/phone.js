let phone = {
  brand: "Apple",
  model: "iPhone 16",
  price: 99999,
  
  getInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}, Price: $${this.price}`;
  }
};

console.log(phone.getInfo());

