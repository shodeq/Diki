// variable
// let number = 10;
// const 
// tipe data
// var String = "";
// var number = 0;
// var bolean = true;

// // pop up box
// console.log("console")
// alert("alert")
// prompt("masukkan")
// confirm("yakin dek?")

// let username = prompt("masukkan nama");
// alert(username);
// let ulang = confirm("yakin dek")
// console.log(ulang)

// let angka = 10;

// console.log(angka += 1);
// console.log(angka -= 1);
// console.log(angka /= 1);
// console.log(angka *= 1);

// let var1 = "10";
// let var2 = 10;

// console.log(var1 == var2)
// console.log(var1 === var2)
// console.log(var1 != var2)
// console.log(var1 !== var2)
// console.log(var1 > var2)
// console.log(var1 < var2)
// console.log(var1 >= var2)
// console.log(var1 <= var2)

// let var1 = 2;

// // todo -|| OR - salah satu benar
// // todo -&& AND - benar semua

// // todo - ! NOT 

// if(var1 === 1 || var1 !== 1){
//     console.log("true")
// }else{
//     console.log("false")

// }

// let var1 = confirm("yakin?");

// if (!var1){
//     console.log("false")
// }else{
//     console.log("true")
// }


// let pilihan = parseInt(prompt("masukkan angka "));

// if(pilihan === 1){
//     console.log("1")
// }
// else if(pilihan === 2){
//     console.log("2")
// }
// else{
//     console.log("salah")
// }

// switch (pilihan){
//     case 1:
//         console.log("1")
//         break;
//     case 2:
//         console.log("2")
//         break;
//     default:
//         console.log("salah")
//         break;
// }
// let length = parseInt(prompt("masukkan angka : ")) 

// for(let i = 1; i <= length ; i++){
//     console.log(i)
// }
// for(let i = 20; i >= length ; i--){
//     console.log(i)
// }

// let ulang = false 
// do {
//     console.log("hello")
//     ulang = confirm("yakin?")

// }while(ulang)


// for (let i = 1; i <= 10 ; i++){
//     if (i % 2 === 1 ){
//         console.log(i + " adalah ganjil")
//     }else{
//         console.log(i + " adalah genap")
//     }
// }


// todo --

// for(let i = 1; i <= 10 ; i++){
//     console.log(`angkot ${i} sedang berjalan dengan baik`)
// }

// for (let i = 1; i <= 10 ; i++){
//     if (i===2 || i===5 || i === 8 ){
//         console.log(`angkot ${i} sedang broken`)
//     }else{
//     console.log(`angkot ${i} sedang berjalan dengan baik`)
//     }
// }

for (let i = 1; i <= 10 ; i++){
    if (i===2 || i===5 ){
        console.log(`angkot ${i} sedang broken`)
    }
    else if(i===3){
        console.log(`angkot ${i} berjalan tapi sepi`)
    }
    else if(i===6){
        console.log(`angkot ${i} berjalan resing`)
    }
    else if(i===8){
        console.log( `angkot ${i} broken dan tidak resing`)
    }
    else{
        console.log(`angkot ${i} sedang berjalan dengan baik`)
    }
}



