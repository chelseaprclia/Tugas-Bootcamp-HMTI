//1. Buat masing-masing 2 contoh penggunaan if, if-else, if-else-if, if-else-if-else, dan if bersarang
//2. Buat 2 contoh penggunaan looping dgn while yg dikombinasikan dengan if-else
//3. Buat contoh penggunaan switch-case dan for-loop di javascript (sunnah ini mah)

//ini jawaban Chelsi, yang nyontek dosa//

//Jawaban No. 1
//a. if
    //contoh 1
        if (20 > 1) {
            console.log("Benar Cuy");
        }

    //contoh 2
        if (1 != 2) {
          console.log("Satu tidak sama dengan dua");
        }

//b. if - else
    //contoh 1
        var ujian = "Tidak Belajar";
        var nilai = 55;

        if (ujian == "Belajar" || nilai > 60) {
            console.log("Maka: LULUS");
        } else {
            console.log("Maka: TIDAK LULUS");
        }
    
    //contoh 2
        var namaHewan = "Buaya";

        if (namaHewan != "Kambing") {
            console.log("Hewan Karnivora");
        } else {
            console.log ("Hewan Herbivora");
        }

//c. if - else - if
    //contoh 1
        var nilai = "85";

        if (nilai >= 85) {
            console.log(grade = "Grade = A");
        } else if (nilai >= 75) {
            console.log(grade = "Grade = B");
        }

    //contoh 2
        var status = "Belum Nikah Nich";

        if (status != "Nikah") {
            console.log("Sabar yaa...");
        } else if (status = "Nikah") {
            console.log("Samawa yaa...")
        }

//d. if - else - if - else
    //contoh 1
        var harga = 50000;

        if (harga <= 40000) {
            console.log("Harganya murah sist")
        } else if (harga >= 60000) {
            console.log("Harganya mahal sist")
        } else {
            console.log("Standar lah")
        }

    //contoh 2
        var beratBadan = 50;
        
        if (beratBadan == 40) {
            console.log("Kamu kurus");
        } else if (beratBadan >= 60) {
            console.log("Kamu gemuk");
        } else {
            console.log("Kamu ideal");
        }

//e. if bersarang
    //contoh 1
        var name = "Chelsea";
        var nama = "Denny";

        if (name != "Chelsea") {
            if (nama == "Denny") {
            console.log("Ini Denny");
            }
        } else {
            console.log("Siapa dong?");
        }
    

    //contoh 2
        var kelas = "XII TKJ 2";
        var sekolah = "Karya Guna Bhakti 2";
        var kota = "Jakarta";

        if (kelas == "XII TKJ 2") {
                console.log("Ini Kelas TKJ 2");
            if (sekolah == "Karya Guna Bhakti 2") {
                console.log("Ini KGB 2");
                if (kota == "Bekasi") {
                    console.log("Ini di Bekasi");
                }
            }
        } else {
            console.log("Kelas berapa? Sekolah mana? Kota mana?");
        }
        
//Jawaban No. 2
//contoh 1
    var konfirmasi = "Tidak Setuju";

    if (konfirmasi == "Setuju"){
        var angka = 0;
        while (angka < 5){
            console.log("Ini hasil loop : " + angka);
            angka++;
        }
    } else {
        console.log("Anda tidak setuju");
    }

//contoh 2
    var kenangan = "Lupakan"; 

    if (kenangan == "Lupakan"){
        var angka = 1;
        while (angka <= 5){
            console.log(angka + ". Move on");
            angka++;
        }
    } else {
        console.log("Jangan dilupakan");
    }
    

//Jawaban No. 3 (Sunnah)
//a. switch - case
    var angka = 7;
  
    switch (angka) {
        case 1:
            console.log("Angka Satu");
            break;
        case 2:
            console.log("Angka Dua");
            break;
        case 3:
            console.log("Angka Tiga");
            break;
        case 4:
            console.log("Angka Empat");
            break;
        default:
            console.log("Bukan angka 1 - 4");
            break; 
        }

//b. For (Looping)
    for(i = 1; i < 10; i++){
        console.log(i + ". Aku sayang kamu");
    }
