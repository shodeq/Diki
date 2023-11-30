const prompt = require('prompt-sync')()
const {getDataMahasiswa}= require("./index3")

let counter
do{
    getDataMahasiswa()
    counter = prompt("apakah anda ingin mengulang ? (y/n)")
}while(counter==='y'|| counter==='Y')