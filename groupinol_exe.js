function getMemberName(){
    console.log("C");
    return "Kwame";
}

function showMember(){
    console.log("B");
    const name = getMemberName();
    Promise.resolve().then(()=>{console.log("E",name);

    })
    console.log("D");
}
    
console.log("A");

setTimeout(()=>{console.log("F")
}, 0)

showMember()
console.log("G")