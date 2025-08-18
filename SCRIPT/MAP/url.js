const shipment= ['SHIP001', 'SHIP002'];
const url=shipment.map((x)=>`/track/${x}`);
console.log(url);