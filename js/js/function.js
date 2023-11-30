
// // ? function declaration

// function penjumlahan (a, b){
//     return a+b
// }

// // ? function expression 
//  const pengurangan = function(a, b) {
//     return a-b
// }

// // ? arrow function 

// const perkalian = (a, b) => a*b


// const operasihitung = (nilai1, nilai2, operator)=>{
//     let hasil;
//     switch (operator) {
//         case '+':
//             hasil = nilai1+nilai2
//             break;
//         case '-':
//             hasil = nilai1-nilai2
//             break;
//         case '*':
//             hasil = nilai1*nilai2
//             break;
//         case '/':
//             hasil = nilai1/nilai2
//             break;

//         default:
//             break;
//     }
//     return hasil
// }
// console.log(operasihitung(8,4,'+'))
// console.log(operasihitung(9,4,'-'))
// console.log(operasihitung(5,4,'*'))
// console.log(operasihitung(20,4,'/'))

// const chalk = require('chalk')
// const cetak = (data) => console.log(chalk.blue(data))

// const otp = (length) =>{
//     let result = ""
//     for (let i = 0; i< length; i++){
//         let random = Math.floor(Math.random()*10)
//         result += random;
//     }
//     return result;
// }
// cetak(otp(4))

const chalk = require('chalk')
const cetak = (data) => console.log(chalk.blue(data))

const randompasword= (length) =>{
    let result = ""
    let lowcase = "qwertyuiopasdfghjklzxcvbnm"
    let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
    let number = "1234567890"
    let symbol = "!@#$%^&*<>"
    let data = lowcase+uppercase+number+symbol

    for (let i = 0; i< length; i++){
        let random = Math.floor(Math.random() * data.length)
        result += data[random];
        // console.log(random)
    }
    return result;
}
cetak(randompasword(10))




