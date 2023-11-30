const mahasiswa = [
    {
        id : 0,
        username: "diki",
        nilai :[20, 89]
    },
    {
        id : 1,
        username: "rapi",
        nilai :[20, 89]

    },
    {
        id : 2,
        username: "arab",
        nilai :[20, 89]

    },
    {
        id : 3,
        username: "nca",
        nilai :[20, 89]

    },
    {
        id : 4,
        username: "eka",
        nilai :[20, 89]

    }

];
 
// for (let i = 0 ; i < mahasiswa.length; i++){
//     console.log(mahasiswa[i])
// }
const loopingarray = (array)=>{
    for(let i = 0; i < array.length; i++){
        console.log(array)
    }
}
loopingarray(mahasiswa)