console.log("Start");
setTimeout(()=>console.log("finished"),3000);
console.log("End")
// Call stack
function first(){
    second()
}

function second(){
    console.log("Welcome to Groupinol Ltd")
}

first()
function greet(name,callback){
    console.log("Hello"+ " " + name)
    callback();
}
greet("Luka",()=>console.log("Registration is successful"))

const promise = new Promise((resolve,rejected)=>{
    const success =true;
    if(success){
        resolve("successful");
    }
    else{
        rejected("unsuccessful");
    }
})
