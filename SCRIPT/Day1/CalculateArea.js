function Area(length,width=length){
    if (length==undefined) return "value not provided";
    return length*width;
}

let area1=Area();
console.log(area1);

let area2=Area(50);
console.log(area2);

let area3=Area(10,11);
console.log(area3);