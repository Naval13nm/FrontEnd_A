const product=['Red Shirt','Blue Jeans'];
const ans=product.map((x)=>x.toLowerCase().split(" ").join("-"));
console.log(ans);