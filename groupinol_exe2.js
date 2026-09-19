// fetchAssociation=()=>[]

// async function loadAssociation(){
//     console.log("1");
//     const association = await fetchAssociation();
//     console.log("2", association.name);//why is it that console.log("2") doesnt print since its awiting the function
// }

// console.log("3")

// loadAssociation();

// console.log("4")

// const student ={
//     name :'Zipporah',
//     programme:'Information technology',
//     active : true
// }

// const updateStudent ={
//     ...student,
//     active:false
// }

// console.log(updateStudent)

const member ={
    name:'Ama',
    address:{
        city:'Accra'
    }
}

const copy ={
    ...member
}
copy.name='Zipporah'
console.log(copy.name)
copy.address.city ='Kumasi'
console.log(member.address.city)

const oldstudent=[
    {
        id: 1,
        name:'Listowel',
        role:'Admin'
    },
    {
        id:2,
        name:'Zipporah',
        role:'member'
    }
]

console.log(oldstudent[0].role)

    
