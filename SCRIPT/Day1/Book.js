const Book={
    title:"Harry Potter",
    author:"Naval",
    year:2025,
    review:[
        {reviews:"harpic",comment:"worst"},
        {reviews:"hritik",comment:"good"},
        {reviews:"Naval",comment:"Excellent"}
    ]
};

console.log(Book.author);
console.log(Book.review[1]);
console.log(Book.review[1].comment);
