// const lectures = [
//   { id: 1, topic: "React Basics", date: "2025-04-28" },
//   { id: 2, topic: "Redux", date: "2025-05-02" },
//   { id: 3, topic: "TypeScript", date: "2025-05-05" },
//   { id: 4, topic: "Node.js", date: "2025-09-30" },
//  { id: 5, topic: "Python", date: "2025-08-15" }
// ];
// const ans = lectures.filter((x)=>x.date>="2025-06-01");
// console.log(ans);

// Why new Date(...) is usually recommended

// Works only if your dates are stored in ISO format (YYYY-MM-DD).

// If someone later changes it to "MM/DD/YYYY" (06/01/2025) or "DD-MM-YYYY" (01-06-2025), string comparison will break silently and give wrong results.

// new Date() makes the comparison format-independent (as long as JavaScript can parse it).

//Using new keyword 

const lectures = [
  { id: 1, topic: "React Basics", date: "2025-04-28" },
  { id: 2, topic: "Redux", date: "2025-05-02" },
  { id: 3, topic: "TypeScript", date: "2025-05-05" },
  { id: 4, topic: "Node.js", date: "2025-09-30" },
 { id: 5, topic: "Python", date: "2025-08-15" }
];

const date= new Date();

const ans = lectures.filter((x)=>new Date(x.date)>=date);
console.log(ans);


// What happens:
                // You create a cutoff date (2025-06-01) as a Date object.
                // For each lecture, new Date(x.date) converts its date string into a Date object.
                // You compare the two Date objects using >=.
                // The filter keeps only those lectures on or after June 1, 2025.