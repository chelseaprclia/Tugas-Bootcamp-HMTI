//Contoh Conditional

//Switch - Case
var pelanggan = "chelsea";

switch (pelanggan) {
    case "Chelsea":
        console.log("Pesertanya si Chelsea!");
        break;
    case "Icha":
        console.log("Pesertanya si Icha!");
        break;
    default:
        console.log("Oh ternyata Baydowi!");
}

//If else - if else
var nilai = "85";

        if (nilai >= 85) {
            console.log(grade = "Grade = Baik Sekali");
        } else if (nilai >= 75) {
            console.log(grade = "Grade = Baik");
        }

//Contoh Variable

//Array of Object
var pelajar = [
    {
        name: "Chelsea",
        age: 21,
        alamat: "Bekasi Timur"
    },
    {
        name: "Baydowi",
        age: 23,
        address: "Bekasi Barat"
    }
];

console.log(pelajar);

//Array
var students = ["Harry", "Hermione", "Ron"]
console.log(students);

//Contoh Function

//Basic Function
function permisi() {
    console.log("Assalamu'alaikum");
}

permisi();

//Return Function
function kasihNama() {
    return "chelsea";
}

var namanya = kasihNama();
console.log(namanya);

//Contoh Looping

var buah = ["Mangga", "Jeruk", "Anggur", "Semangka"];

//While
var i = 0;
while(i < buah.length) {
    console.log(buah[i]);
    i++;

}

