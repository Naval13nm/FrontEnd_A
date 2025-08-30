function c(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("C Khtm Hua");
        resolve();
    },3000);
});
}

function cpp(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Cpp Khtm Hua");
        resolve();
    },5000);
});
}

function html(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Html Khtm Hua");
        resolve();
    },2000);
});
}

async function main() {
  try {
    await c();
    await cpp();
    await html();
  } catch (error) {
    console.log(error);
  }
}
main();