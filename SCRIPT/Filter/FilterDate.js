const lectures = [
  { id: 1, topic: "React Basics", date: "2025-04-28" },
  { id: 2, topic: "Redux", date: "2025-05-02" },
  { id: 3, topic: "TypeScript", date: "2025-05-05" },
  { id: 4, topic: "Node.js", date: "2025-04-30" }
];

const ans=lectures.filter((lectures)=>lectures.date>"2025-04-30");
console.log(ans);