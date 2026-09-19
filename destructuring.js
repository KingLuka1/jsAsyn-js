// const { settings } = require("node:cluster")
// const { stringify } = require("node:querystring")

// const student = [{
//     id : 1,
//     name :'Zipporah',
//     faculty:'Information Technology'
// },
// {
//     id : 2,
//     name :'Theophilus',
//     faculty:'Information Technology'
// },
// {
//     id : 3,
//     name :'Listowel',
//     faculty:'Computer Science'
// }
// ]

// const [firstStudent,secondStudent,thirdStudent] = student
// console.log(firstStudent)

// const{id ,name ,faculty,role='classPrefect'} = student
// console.log(name)
// console.log(role)

// const membership ={
//     id:15,
//     status:"ACTIVE",
//     association:{
//         id:10,
//         familyName:'Vigbedor Family'
//     }
// }

// const {
//     association:{ familyName }
// } =membership
// console.log(familyName) 

// const person ={
//     ...student,
//     ...membership
// }
// console.log(person)

// const association ={
//     id:10,
//     name:"WMISA",
//     settings:{
//         allowApplications:true,
//         requireApproval:true,
//         notification:{
//             email:true,
//             push:false
//         }
//     }
// }
//  const updatePush ={
//     ...association,
//     settings:{
//         ...association.settings,
//         notification:{
//             ...association.settings.notification,
//             push:true
//         }
//     }
//  }
//  console.log(updatePush)

//  const currentStudent = {
//     ...student
//  }

//  const names =student.map(({name})=>name)
// console.log(names)

// // The below example confirms that since rest opearators collects values and gather them 
// // u can call it prior and later assign the values to it it would gather them
// function add(...numbers) {
//     console.log(numbers);
// }

// add(10, 20, 30, 40);
// console.log(add)

// function introduce(name, ...skills) {
//     console.log(name);
//     console.log(skills);
// }
// introduce(
//     "Theophilus",
//     "JavaScript",
//     "TypeScript",
//     "NestJS",
//     "Prisma"
// );
// console.log(introduce)

// const bills =[
//     {id:1, title:"January Dues", paid:true},
//     {id:2, title:"February Dues", paid:false},
//     {id:3, title:"March Dues", paid:true}
// ]
// const [firstBills,secondBills,thirdBills]=bills

// secondBills.paid=true
// console.log(bills)

// const member ={
//     id: 10,
//     name: "Akosua",
//     role: "TREASURER",
//     active: true
// };
// const {id,name,role,active} = member
// console.log(`${name} is a ${role}`)

// const association ={
//     id: 20,
//     name: "Vigbedor Family"
// };
// const {id:associationId,name:associationName}=association
// console.log(associationId);
// console.log(associationName)

// const paymentStatuses = [
//     "PENDING",
//     "SUCCESS",
//     "FAILED"
// ]

// const [pending,success,failed]=paymentStatuses
// console.log(pending)

// const member ={
//     id: 10,
//     name: "Ama",
//     role: "MEMBER",
//     active: true
// }

// updateMember ={
//     ...member,
//     role:"ADMIN"
// }
// console.log(member.role)
// console.log(updateMember.role)

// const members = [
//     "Ama",
//     "Kojo"
// ]
// const updateMemebers =[
//     ...members,
//     "Yaw"
// ]
// console.log(updateMemebers)

// const association ={
//     id:1 ,
//     name:"WMISA",
//     settings:{
//         publicApplications:false,
//         notifications:{
//             email:true,
//             push :false
//         }
//     }
// }

// updateAssociation ={
//     ...association,
//     settings:{
//         ...association.settings,
//         notifications:{
//             ...association.settings.notifications,
//             push:true
//         }
//     }
// }
// console.log(association.settings.notifications.push)
// console.log(updateAssociation.settings.notifications.push)

// const members =[
//     {id:1,name:"Ama",status:"ACTIVE"},
//     {id:2,name:"Kojo",status:"ACTIVE"},
//     {id:3,name:"Yaw",status:"ACTIVE"}
// ]

// const updateMemebers =members.map((member)=>member.id===2
// ?{...member,status:"SUSPENDED"}
// :member
// )
// console.log(members)
// console.log(updateMemebers)

// const user =Object.freeze({
//     id:1,
//     name:"Ama",
//     email:"ama@example.com",
//     passwordHarsh:"xyz123"
// })

// const {xcpasswordHarsh,...userInfo}=user
// console.log(userInfo)

// const newUser ={
//     ...user
// }
// console.log(user===newUser)

// user.id =2
// console.log(user)


// const members = {
//         status:"ACTIVE",
//         goodStanding:true,
//         outstandingBalance:10
// }


// function applyOutstandingBalance(amount){
//    return{
//     ...members,
//    outstandingBalance:amount,
//    goodStanding:amount===0
//  }
// }
// console.log(applyOutstandingBalance())


// const member = {
//     status:"Active",
//     goodStanding:true,
//     outstandingBalance:0
// }

// //member.outstandingBalance = 1000;

// function applyOutstandingBalance(memberData, newAmount=0){
//     return{
//         ...memberData,
//         outstandingBalance:newAmount,
//         goodStanding: newAmount===0
//     }
// }

// mutatedMember = applyOutstandingBalance(member, 1000);

// console.log(mutatedMember);


// const members = [
//     {
//         id:1,
//         name:"Ama",
//         status:"PENDING"
//     },

//     {
//         id:2,
//         name:"Kojo",
//         status:"PENDING"
//     }
// ]

// const [first,second]=members
// const updateMemebers =[
//     members.map(member=>member.id===2
//     ?{...member,status:"ACTIVE"}
//     :member
// )]
// console.log(updateMemebers)


// const members =[
//     {id:1, name:"Ama"},
//     {id:2, name:"kojo"},
//     {id:3, name:"Yaw"}
// ]

// const deleteMember=members.filter(member=>member.id !==2)
// console.log(deleteMember)

const association = {
    id:1,
    settings:{
        payments:{
            momoEnabled:true,
            cardEnabled:false
        }
    }
}

const newAssociation ={
    ...association,
    settings:{
        ...association.settings,
        payments:{
            ...association.settings.payments,
            cardEnabled:true
        }
    }
}
console.log(newAssociation)


function calculateTotals(numbers) {
let total = 0;
for (const number of numbers) {
total += number;
}
return total;
}

const add=calculateTotals([2,4,6])
console.log(add)

const name= "Zipporah"
for(const letter of name){
    console.log(letter)
}
const students = [
{ name: "Kwame", score: 80 },
{ name: "Ama", score: 65 },
{ name: "John", score: 90 }
];
let totalScore = 0;
for (const student of students) {
const scores=totalScore += student.score;
console.log(scores)
}
const average = totalScore / students.length;
console.log(average)