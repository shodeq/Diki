const random= ()=>{
    const value = ["gajah","semut","manusia"]
    return value[Math.floor(Math.random()*value.length)]
}

const user = prompt("masukkan tebakan anda (gajah, semut, manusia): ")
const comp = random()

const program = (user, comp)=>{
    console.log({user,comp})
    let hasil;
    if (comp === user){
       return hasil= "seri";
    }
    else if(comp === "semut" && user === "manusia"){
        return hasil="kamu menang";
    }
    else if(comp === "semut" && user === "gajah"){
        return hasil="kamu kalah";
    }
    else if (comp === "manusia" && user === "gajah"){
        return hasil="kamu menang";
    }
    else if (comp === "manusia" && user === "semut"){
        return hasil="kamu kalah";
    }
    else if (comp === "gajah" && user === "manusia"){
        return hasil="kamu kalah";
    }
    else if (comp === "gajah" && user === "semut"){
        return  hasil="kamu menang";
    }
    // return hasil;
}
// console.log({user,comp})

// alert(program(user.toLocaleLowerCase(), comp()))
alert(`kamu memilih ${user} dan komputer memilih ${comp} maka kamu ${program(user.toLocaleLowerCase(), comp)} dari komputer `)