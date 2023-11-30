let ulang = false
do{
    let pilihan =parseInt(prompt("pilih nilai (1. Volume || 2. Luas)"))
    switch (pilihan) {
        case 1:
            //volume
            let pilihanvolume = parseInt(prompt("1. Kubus || 2. Balok || 3. Kerucut || 4. Tabung"))
            switch (pilihanvolume) {
                case 1:
                    // kubus 
                    let sis = parseInt(prompt("Masukkan sisi"))
                    volumekubus = 6*sis*sis
                    alert(volumekubus)
                    break;
                case 2:
                    //balok
                    let  panjangbalok= parseInt(prompt("Masukkan panjang "))
                    let  lebarbalok= parseInt(prompt("Masukkan lebar"))
                    let  tinggibalok= parseInt(prompt("Masukkan tinngi"))
                    volumebalok = panjangbalok * lebarbalok * tinggibalok
                    alert(volumebalok)
                    break;
                case 3:
                    //kerucut
                    let jarijarikerucut = parseInt(prompt("masukkan jari-jari kerucut"))
                    let tinggikerucut = parseInt(prompt("masukkan tinggi kerucut"))
                    volumekerucut = 1/3 * Math.PI * jarijarikerucut * jarijarikerucut * tinggikerucut
                    alert(volumekerucut)

                    break;
                case 4:
                    let jaritabung = parseInt(prompt("masukkan jari-jari tabung "))
                    let tinggitabung = parseInt(prompt("masukkan tinggi tabung "))
                    volumetabung = Math.PI * jaritabung * jaritabung * tinggitabung
                    alert(volumetabung)
                    break;
                default:
                alert("pilihan anda salah")
                break;
            }
            break;
            case 2:
                //luas 
                let pilihanluas = parseInt(prompt("1. Kubus || 2. Balok || 3. Kerucut || 4. Tabung"))
                switch (pilihanluas) {
                    case 1:
                        //kubus
                        let sis = parseInt(prompt("Masukkan sisi"))
                        luaskubus = sis*sis*sis
                        alert(luaskubus)
                        break;
                    case 2:
                        //balok
                        let balokpanjang = parseInt(prompt("Masukkan panjang balok"))
                        let baloktinggi = parseInt(prompt("Masukkan tinggi balok"))
                        let baloklebar = parseInt(prompt("Masukkan lebar balok"))
                        luasblaok = 2*(balokpanjang*baloklebar)+(balokpanjang*baloktinggi)+(baloklebar*baloktinggi)
                        alert(luasblaok)
                        break;
                    case 3:
                        //kerucut
                        let jarijarikerucut = parseInt(prompt("Masukkan jari-jari kerucut"))
                        let kerucutsisimiring = parseInt(prompt("Masukkan sisi miring kerucut"))
                        luaskerucut = Math.PI * jarijarikerucut * (jarijarikerucut + kerucutsisimiring)
                        alert(luaskerucut)
                    case 4:
                        //tabung
                        let tabungjari = parseInt(prompt("masukkan jari-jari tabung "))
                        let tabungtinggi= parseInt(prompt("masukkan tinggi tabung "))
                        luastabung = 2*Math.PI*jaritabung * (jaritabung + tinggibalok)
                        alert(luastabung)
                        break;

                    default:
                        alert("pilihan anda salah")
                        break;
                }
                break;
            default:
                alert("pilihan tidak tersedia")
                break;
    }
    ulang = confirm("mau mengulang? ")
}while(ulang)