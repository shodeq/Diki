
const getUser = (count) =>{
    const user = []
    for(let i = 0; i< count; i++){
        user.push(prompt(`masukkan nama ${i+1}`))
    }
    return user;
}

const getGroup = (count)=>{
    const group = []
    for(let i =0 ;i<count; i++){
        group.push([])
    }
    return group;
}

const createTeam = (user, group)=>{
    let member = user.length/group.length;
    group.map(item => {
        for(let i = 0; i<member; i++){
            item.push(user.sort(()=>Math.random()-0.5).shift())
        }
    })
    return group;
}

let userCount = parseInt(prompt("masukkan jumlah anggota : "))
let groupCount = parseInt(prompt("masukkan jumlah kelompok : "))

// getUser(userCount)
// getGroup(groupCount)

const hasil = createTeam(getUser(userCount),getGroup(groupCount))

const container = document.getElementById("container")

container.innerHTML = hasil.map((item,index)=>{
    return `<ul class="bungkus">
    <h1>Kelompok ke ${index+1}</h1>
    ${item.map(itemIn =>{
        return `<li class="item">${itemIn}</li>`
    }).join('')}
    </ul>`
}).join('')

