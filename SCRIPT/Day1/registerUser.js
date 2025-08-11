function registerUser(username,...properties){
return username +" " +properties.join(" "); //use join to remove the comma of array elements which are representing as a string 
}

let user1=registerUser("naval","naval@gmail.com","XXXXXX4567");
console.log(user1);

let user2=registerUser("rohit","rohit@gmail.com");
console.log(user2);

let user3=registerUser("ankit","ankit@gmail.com","XXXXXX4567","21");
console.log(user3);


// What join() does

// The .join() method takes all elements of an array and combines them into a single string, using a separator you choose.

// Syntax:
// array.join(separator)