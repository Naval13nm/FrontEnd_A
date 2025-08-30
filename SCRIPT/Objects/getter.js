const emp4 = { basic: 30000, bonus: 5000 };
Object.defineProperty(emp4, "totalSalary", {
  get() { return this.basic + this.bonus; }
});
console.log( emp4.totalSalary); // 35000