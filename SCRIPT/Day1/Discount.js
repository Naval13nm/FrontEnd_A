function Discount(Price,Discount=10){
if(Price==undefined) 
    {console.log("Enter Price First");
    return;
}
return Price-((Discount/100)*Price);
}

let Customer=Discount(200);
console.log(Customer);

let Customer1=Discount(200,50);
console.log(Customer1);

let Customer2=Discount();
console.log(Customer2);