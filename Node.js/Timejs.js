function fgh() {
  setTimeout(() => {
    console.log("callback queue mai fgh ka swagat hai");
  }, 8000);
}
function shadi() {
  setTimeout(() => {
    console.log("shadi ho gaiiii");
  }, 12000);
}
function timetakingfunction() {
  setTimeout(() => {
    console.log("callback queue mai jane wala phela function");
    fgh();
  }, 5000);
}
function def() {
  console.log("hello def mai hote hue bhi stack mai aa gaya");
  setTimeout(() => {
    console.log("main fun def hoon");
  }, 1000);
}
function abc() {
  console.log("Stack mai jane wala phela function");
  def();
  console.log("abc stack se release ho gaya");
}
console.log("hello");
abc();
console.log("hello2");
timetakingfunction();
console.log("hello after timetaking function");
shadi();
console.log("hello3");