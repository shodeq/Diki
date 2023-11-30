const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// // nilai yang sama
// const fill = arr.fill(1)
// console.log(fill)

// join untuk menambahkan
// const jon = arr.join(',')
// console.log(jon)

// // shift untuk melanjutkan
// for (let i = 0; i <5; i++){
//     console.log(arr.shift())
// }
// console.log("gap")
// for (let i = 0; i <5; i++){
//     console.log(arr.shift())
// }
// const newArr = []
// for (let i = 0; i <5; i++){
//     newArr.push(arr.shift())
// }
// console.log(arr)
// console.log(newArr)

// // reverse untuk membalik
// const reverseNewArr = arr.reverse()
// console.log(reverseNewArr)

// // include untuk mencari angka
// console.log(arr.includes(6))

// // map untuk memetakan f\data yang berada dalam array
// for(let i = 0; i <arr.length;i++){
//     console.log(arr[i])
// }
// const newArr = arr.forEach((item, index)=>console.log(`ke ${index} = ${item}`))
// const newArr2 = arr.map(item=>item)

// const mapNewArr= arr.map(arr=>2*arr)
// console.log(mapNewArr)

// filter mengembalikan semua setelah kondisi
const filterArray = arr.filter(item => item >5)
console.log(filterArray)
// hanya mengembalikan satu nilai
const findeArray = arr.find(item => item >5)
console.log(findeArray)
// untuk memastikan kondisi array lebih dari 0
const everArray = arr.every(item => item >0)
console.log(everArray)

// find indek untuk menemukan urutan ke berapa indek yang anda cari
const indArr = arr.findIndex(item => item ===0)
console.log(indArr)

// reduce untuk untuk melalukan penjumlahan berlanjut
const reduceArr = arr.reduce((a, b)=> a+b)
console.log(reduceArr)

// const len = arr.length
// for (let i = 0; i<len; i++){
//     // // menghaous semua .pop
//     // arr.pop()

//     // // fill untuk mengganti semua
//     // arr.fill(1)

//     // // push untuk menambahkan pada bagian paling belakanh
//     // arr.push(10)
// }
// console.log(arr)