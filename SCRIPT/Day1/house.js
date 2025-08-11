let house = {
  address: "123 Main St",
  size: "1500 sqft",
  price: 250000,
  
  getDetails() {
    return `House located at ${this.address}, size: ${this.size}, priced at $${this.price}.`;
  }
};

console.log(house.getDetails());

