// console.log("Start");
// setTimeout(()=>console.log("finished"),3000);
// console.log("Processing")
// // Call stack
// function first(){
//     second()
// }

// function second(){
//     console.log("Welcome to Groupinol Ltd")
// }

// first()
// function greet(name,callback){
//     console.log("Hello " + name)
//     callback();
// }
// greet("Luka",()=>console.log("Registration is successful"))

// const promise = new Promise((resolve,rejected)=>{
//     const success =true;
//     if(success){
//         resolve("successful");
//     }
//     else{
//         rejected("unsuccessful");
//     }
// })
// console.log(promise)

// async function getStudent(status){
//     return status;
// }
 
// // This can use synchronous programming and still work since its not working on any big data
// // like getting information from a database or an api 
// async function loadStudent(){
// const info = await getStudent("Status: You can now access this site");
// console.log(info)
// }

// loadStudent()




// function getFirstName(){
//     const name ="Theophilus";
//     console.log(name)  
// }
// getFirstName()
// function getLastName(){
//     const name ="Luka-Nani"
//     console.log(name)//since variable in a function belongs to its scope even though the 
//     //variable name is being used in two seperate functions it still works
// }
// getLastName()

function performAction(callback){

}


    ()=>{(console.log("Sending notification"))}



// Scope
// const assoc = "Global Assoc"
// function show(){
//     const assoc = "Vigbedor family"
//     console.log(assoc)
// }
// show()
// console.log(assoc)



// fetchMembers=()=>[{name:'Zipporah', level:300, programme:'Information Technology'},
//     {name:'Listowel', level:'comped', programme:'Computer Science'},
//     {name:'Theophilus', level:300, programme:'Information Technology'}
// ]


// async function loadMembers(){
//     console.log('Loading');
//     const members = await fetchMembers();
//     console.log('Loaded')
//     console.log(members)
// }
// loadMembers()
    






// function getStudent() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("kwabena");
//         }, 2000);
//     });
// }
// console.log(getStudent())

// function getStudent() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("kwabena");
//         }, 2000);
//     });
// }
// console.log(getStudent())