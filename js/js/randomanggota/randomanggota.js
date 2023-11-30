
let count = parseInt(prompt("jumlah mahasiswa : "))

let jumlahkelompok = parseInt(prompt("jumlah kelompok : "))

const masukkanama =(count)=>{
    let names = []
    for(let i = 0; i < count; i++){
        names.push(prompt("masukkan nama : "))
    }
    return names;
}

const menentukanjumlahkelompok =(count, jumlahkelompok)=>{
    const kelompok = []
    for(let  i = 0; i< count/jumlahkelompok; i ++){
        kelompok.push([])
    }
    return kelompok
}
const masukkannamasetiapklompok = (count, jumlahkelompok)=>{
    const names = masukkanama(count)
    const kelompok = menentukanjumlahkelompok(count,jumlahkelompok)
    for (let i = 0; i< kelompok.length; i++){
        for (let j = 0; j <names.length; j++){
            kelompok[i].push(names[j])
        }

    }
    console.log(kelompok)
}

masukkannamasetiapklompok(count, jumlahkelompok)

// console.log(menentukanjumlahkelompok(count,jumlahkelompok))
// console.log(masukkanama(count))