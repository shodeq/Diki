// const prompt = require('prompt-sync')()
// const chalk = require ('chalk')

// const cetak = (data)=> chalk.blue(data)

// const nama = prompt(cetak("masukkan nama : "))
// console.log(cetak(nama))

const prompt = require('prompt-sync')()
const chalk = require('chalk')
const fs = require("fs")

const filePath = "./data/json/dataMahasiswa.json"
const dataMahasiswa = []

const createDirectory = (filePath)=>{

    if(!fs.existsSync('./data')){
        fs.mkdirSync('./data',err=>{
            if(err) throw err
        });
    }
    if(!fs.existsSync('data/json')){
        fs.mkdirSync('data/json',err=>{
            if(err) throw err
        });
    }
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath,'[]',err=>{
            if(err) throw err
        });
    }
}

const createStoreData = (filePath)=>{
    if(fs.existsSync(filePath)){
        return JSON.parse(fs.readFileSync(filePath,"utf-8"))
    }
}

const saveDataMahasiswa=(filePath,dataMahasiswa)=>{
    if(!fs.existsSync(filePath)){
        createDirectory(filePath)
    }
    fs.writeFileSync(filePath,JSON.stringify(dataMahasiswa),err=>{
        if(err)throw err
    })
}
const getDataMahasiswa=()=>{
    createDirectory(filePath)
    const Mahasiswa ={}
    const storeData = createStoreData(filePath) 
    //  todo milik object mahasiswa
    const data = ['fullName', 'NIM' , 'Email' , 'NoHp']
    
    // todo - array sebagai properti dari object mahasiswa
    data.map(item => {
        do{
            Mahasiswa[item]=prompt(`Masukkan ${item} : `)
        }while(Mahasiswa[item]===null || Mahasiswa[item]==="")
    })
    storeData.push(Mahasiswa)
    saveDataMahasiswa(filePath, storeData)
}

module.exports = {
    getDataMahasiswa
}





// save