// const courses = [
//   { id: 1, name: "Full Stack Dev", duration: 12 },
//   { id: 2, name: "Data Entry", duration: 3 },
//   { id: 3, name: "AI & ML", duration: 8 },
//   { id: 4, name: "Tally", duration: 4 }
// ];
// const duration=courses.filter(course => course.duration > 5)
// console.log(duration);

// const employees = [
//   { id: 1, name: "Isha", joinedOn: "2025-12-31" },
//   { id: 2, name: "Arjun", joinedOn: "2025-01-10" },
//   { id: 3, name: "Sneha", joinedOn: "2024-11-15" },
//   { id: 4, name: "Dev", joinedOn: "2025-02-01" }
// ];
// let JulyJoined= employees.filter((emp) => emp.joinedOn > "2025-01-01")
//   console.log(JulyJoined);

// const events = [
//   { id: 1, name: "Workshop", date: "2025-04-26" }, // Saturday
//   { id: 2, name: "Hackathon", date: "2025-04-27" }, // Sunday
//   { id: 3, name: "Seminar", date: "2025-04-25" }, // Friday
//   { id: 4, name: "Webinar", date: "2025-04-28" }  // Monday
// ];

// let weekendsevents=events.filter((event) =>{

// } )

// const employees = [
//   { id: 1, name: "Isha", joinedOn: "2025-12-31" },
//   { id: 2, name: "Arjun", joinedOn: "2025-01-10" },
//   { id: 3, name: "Sneha", joinedOn: "2024-11-15" },
//   { id: 4, name: "Dev", joinedOn: "2025-02-01" }
// ];
// let JulyJoined = employees.filter((emp) => {
//   const joinedDate = new Date(emp.joinedOn);
//   return joinedDate.getMonth() === 6; // July is month 6 (0-indexed)
// });

// const subscriptions = [
//   { id: 1, user: "Kiran", expiresOn: "2025-04-24" },
//   { id: 2, user: "Rajat", expiresOn: "2025-04-30" },
//   { id: 3, user: "Simran", expiresOn: "2025-05-02" },
//   { id: 4, user: "Ajay", expiresOn: "2025-04-23" }
// ];
// let currentDate= new Date("2025-04-25");  // Assuming current date is 25th April 2025//
// let next7days= new Date(currentDate);     // stores value of current date in next7days//
// next7days.setDate(currentDate.getDate() + 7) // using setDate method to add 7 days to current date//
// next7days = next7days.toISOString().split('T')[0]; //converting next7days into string format but it still showes extra thing wth date so in order to remove that we use split method and take only the date part//
// currentDate = currentDate.toISOString().split('T')[0]; 
// console.log(next7days);
// const notifyUsers = subscriptions.filter((sub) =>sub.expiresOn >= currentDate && sub.expiresOn <= next7days);
// console.log(notifyUsers);
// const employees=[
//   {name: "ravi" , joinedon: "2024-06-15"},
//   {name: "kavi" , joinedon: "2023-06-15"},
//   {name: "navi" , joinedon: "2022-06-15"},   
// ];
// const today=new Date("2025-07-12").getFullYear();
// console.log(today);
// const yesterday= new Date("2023-08-25").getFullYear();
// console.log(yesterday);
// const days=today-yesterday;
// console.log(days);
// console.log(typeof days);

// 

// const employees = ["Naval Mishra" , "Ravi Kumar", "Kavi Singh", "Navi Sharma"];
// let data=employees.map((x) =>
// `"hi" ${x}`.toLocaleLowerCase().replace(" ", "@")
// );

// console.log(data); 

const employees = ["Naval jkjo jojo j iojo Mishra" , "Ravi knk ijij  Kumar", "Kavi rkrlrj Singh", "Navi Sharma"];
let Result=employees.map((x) =>{
  let nameParts = x.split(" ");
  let lastno= nameParts[nameParts.length - 1];
  let firstno = nameParts.slice(0, -1).join(" ");
  return `"hi" ${firstno} ${lastno}`.toLocaleLowerCase().replace(" ", "@");
 
})
console.log(Result);
