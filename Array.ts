interface Member {
    id : string
    name: string
    role : "ADMIN" | "MEMBER"
    status : "ACTIVE" | "INACTIVE"
    balance : number
}

const members:Member[] = [
   { id:"m1",
    name: "Ama Mensah",
    role:"ADMIN",
    status:"ACTIVE",
    balance:0
   },

   {
    id:"m2",
    name: "Kojo Asare",
    role:"MEMBER",
    status:"ACTIVE",
    balance:200
   },

   {
    id:"m3",
    name: "Yaw Boateng",
    role:"MEMBER",
    status:"INACTIVE",
    balance:50
   }
]

const isActive = members.filter(member=>member.status === "ACTIVE")
console.log(isActive)

console.log('')
const isFindMember = members.find(member=>member.id==="m2")
console.log(isFindMember)

console.log('')
const isAtLeastOneOwing = members
.filter(member=>member.role==="MEMBER")
.some(member=>member.balance<0)
console.log(isAtLeastOneOwing)


console.log('')
console.log('')
const isOwing = members
.filter(member=>member.role==="MEMBER")
.filter(member=>member.balance>0)
console.log(isOwing)

console.log('')
const isZeroBalance = members.every(member=>member.balance ===0)
console.log(isZeroBalance)

console.log('')
const isName = members.map(member => member.name)
console.log(isName)

console.log('')
const isTotalOwingBalance = members
.map(member=>member.balance)
.reduce((sum,member)=>sum + member)
console.log(isTotalOwingBalance)

console.log('')
const isActiveMemberOwing = members
.filter(member=>member.role==="MEMBER")
.filter(member=>member.status==="ACTIVE")
.filter(member =>member.balance>0)
console.log(isActiveMemberOwing)

console.log('')
const updateMembers = members
.filter(member=>member.id ==="m2")
.map(member=>({
    ...member,
    balance:0
}))
console.log(updateMembers)

console.log('')
const deleteMember =members.filter(member=>member.id !=="m3")
console.log(deleteMember)

console.log('')
const isAdminInclusive = members.some(member=>member.role ==="ADMIN")
console.log(isAdminInclusive)