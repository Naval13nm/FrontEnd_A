const lesson=['Lesson 1', 'Lesson 2'];
const result=lesson.map(x=>({
    lesson:x,
    completed:false
}));
console.log(result);