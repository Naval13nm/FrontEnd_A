function timetakingfunction() {
  setTimeout(() => {
    console.log("callback queue mai jane wala phela function");
  }, 3000);
}
function abc() {
  console.log("Stack mai jane wala phela function");
}
console.log("hello");
abc();
console.log("hello2");
timetakingfunction();
console.log("hello3");