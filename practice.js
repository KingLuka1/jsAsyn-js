// const member ={
//     name:'Kwame',
//     address:{
//         city:'Accra'
//     }
// }

// const updateMember ={
//     ...member,
// }

// updateMember.address.city ='Kumasi'
// console.log(updateMember.address.city)

// const oldMembers = ["Ama","Kwabena"]

// const members =[
//     ...oldMembers,
//    " Kojo"
// ]
// console.log(members[0])

// const newMembers = [
//     {
//         id:1,
//         name:'Theophilus',
//         role:'Admin'
//     },
//     {
//         id:2,
//         name:'Zipporah',
//         role:'Member' 

//     }
// ]
// console.log(newMembers[0].role)

// const members =[
//     {id:1, name:'Listowel'},
//     {id:2, name:'Zipporah'}
// ]

// const names =members.map((member)=>member.name)
// console.log(names)

// members.forEach((member)=>console.log(member))

const bills =[
    {id:1,amount:100, paid:false},
    {id:2,amount:150, paid:false},
    {id:3,amount:200, paid:false},
]
const isFiltered=bills.filter((bill)=>bill.id==2)
const isPaid=bills.findIndex((bill)=>bill.id==2)
const isSome =bills.every((somebill)=>!somebill.paid)
console.log(isPaid)
console.log(isFiltered)
console.log(isSome)

const roles =["ADMIN","TREASURE","MEMBER"]
const Roles=roles.includes("ADMIN")
console.log(Roles)

const payBills =[
    {amount:100},
    {amount:300},
    {amount:400},
    {amount:200}

]
const total = payBills.reduce((sum,bill)=>{
    return sum + bill.amount
},0)
console.log(total)

const getTotal =[
    {id:1,amount:100, paid:false},
    {id:2,amount:150, paid:false},
    {id:3,amount:200, paid:true},
]

const sumAmount = getTotal
.filter((bill)=>!bill.paid)
.map((bill)=>bill.amount)
.reduce((sum,amount)=>sum + amount)

console.log(sumAmount)
sortTotal = getTotal.toSorted((a,b)=>b.id-a.id)
// sortTotal = [...getTotal].sort((a,b)=>b.id-a.id) rather do this and for goo the first because this does not change
//  the array but rather creates a new one unlike the first one u can also use this 
console.log(sortTotal)