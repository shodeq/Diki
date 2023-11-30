const dataMahasiswa = []
let counter;

const getDataMahasiswa = ()=>{
    const Mahasiswa ={}
    do{
        Mahasiswa.username= prompt("masukkan nama : ")
        Mahasiswa.nim= prompt("masukkan NIM anda: ")
        Mahasiswa.email= prompt("masukkan Email anda: ")
        Mahasiswa.nohp= prompt("masukkan NO HP anda: ")
    }while(Mahasiswa.username === null || Mahasiswa.username === "" 
    ||Mahasiswa.nim === null || Mahasiswa.nim === "" 
    || Mahasiswa.email === null || Mahasiswa.email === ""
    || Mahasiswa.nohp === null || Mahasiswa.nohp === "")

    return Mahasiswa;
}
do{
    dataMahasiswa.push(getDataMahasiswa())
    counter = confirm ("Lagi bro ?")
}while(counter)

const strDataMahasiswa = JSON.stringify(dataMahasiswa)
localStorage.setItem('Data Mahasiswa', strDataMahasiswa)

console.log(dataMahasiswa)
