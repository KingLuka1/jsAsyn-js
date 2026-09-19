// function calculateOutstandingBalance(billAmount,amountPaid){
// const outstandingAmount = billAmount - amountPaid
// return outstandingAmount
// }
// calculateOutstandingBalance(500, 200)
setTimeout(()=>console.log('Finished'),2000)

calculateOutstandingBalance=(billAmount,amountPaid)=>{
    const outstandingAmount = billAmount - amountPaid
    console.log (outstandingAmount)
}

calculateOutstandingBalance(500,300)

isMembershipActive=(status)=>{
    const isMembershipActive = "active"||"pending"
    if (status==="active"){
        console.log (true);
    } else if(status==="pending"){
        console.log (false)
    }
    else{console.log({error:"invalid credential"})}

}
isMembershipActive("active")

function iMembershipActive(status){
     if (status==="active"){
        console.log (true);
    } else if(status==="pending"){
        console.log (false)
    }
    else{console.log({error:"invalid input"})}

}
iMembershipActive("")

function performAction(callback){
    console.log("starting action")
    callback()
    
}

performAction(()=>{console.log("Sending notification")})

const members =[
    {id:1,name:"Listowel",status:"active"},
    {id:2,name:"Theophilus",status:"active"},
    {id:3,name:"Zipporah",status:"pending"},
]

const isActive=members.filter((person)=>{
    return person.status=="active"
})
console.log(isActive)

const arrayNames=members.map((person)=>{
    return person.name
})
console.log(arrayNames)

const student = {
    id:102,
    name:'Theophilus',
    active:true
}

student.email ="theo@gmail.com"
student.name ="Zipporah"
delete student.email

console.log(student)

const member ={
    name:"kwabena",

    greet(){
        console.log(`Hello ${this.name}`)
    }
};

member.greet()

// let age = 25;
// age =26
// let anotherAge=age
// anotherAge=30
// console.log(age)
// console.log(anotherAge)

