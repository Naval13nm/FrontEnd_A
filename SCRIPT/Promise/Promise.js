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

c()
.then(()=>{
    cpp();
})
.then(()=>html())
.catch((e)=>console.log("error occured",e))
.finally(console.log("Sab ktm"));