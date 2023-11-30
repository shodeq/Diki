const dataMahasiswa = []
let counter;

const getDataMahasiswa = ()=>{
    const Mahasiswa ={}
    //  todo milik object mahasiswa
    const data = ['fullName', 'NIM' , 'Email' , 'NoHp']

    // todo - array sebagai properti dari object mahasiswa
    data.map(item => {
        do{
            Mahasiswa[item]=prompt(`Masukkan ${item}`)
        }while(Mahasiswa[item]===null || Mahasiswa[item]==="")
    })

    return Mahasiswa;
}
// todo untuk melakukan pengulanagan 
const storeDatataMahasiswa = localStorage.getItem('Data Mahasiswa')
if(storeDatataMahasiswa){
    const objStoreDataMahasiswa= JSON.parse(storeDatataMahasiswa)
    dataMahasiswa.push(...objStoreDataMahasiswa)
}
do{
    dataMahasiswa.push(getDataMahasiswa())
    counter = confirm ("Lagi bro ?")
}while(counter)



// todo simmpannke local storage
// console.log(objStoreDataMahasiswa)

const strDataMahasiswa = JSON.stringify(dataMahasiswa)
localStorage.setItem('Data Mahasiswa', strDataMahasiswa)

console.log(dataMahasiswa)