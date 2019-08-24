/*

1. Buatlah sebuah filter function untuk menyaring nama participants yang huruf tengahnya mengandung huruf "bebas"
tapi namanya harus lebih dari 1 kata

2. var kata = "aku suka makan nasi padang"
percahlah variable tersebut menjadi array dengan ekspektasi output seperti berikut:
[
    "aku suka",
    "aku suka makan",
    "aku suka makan nasi",
    "aku suka makan nasi padang"
]

3. Buatlah 1 contoh penggunaan array function 
-> map, filter, foreach, find, findIndex
notes : tidak boleh sama dengan contoh

*/

var participants = [
    {
        name: "Chelsea Pricilia",
        score: 10,
        hobbies: ["Ngoding", "Ngising", "Makan"]
    },
    {
        name: "Daus Firmansah",
        score: 5,
        hobbies: ["Ngoding", "Ngising", "Makan"]
    },
    {
        name: "Muhammad Fardan",
        score: 7,
        hobbies: ["Nakutin orang"]
    }
];

//1. Jawaban No 1
var filteredMiddleName = participants.filter(function(p) {

    var totalHuruf = p.name.length;

    var nilaiTengah = totalHuruf / 2;

    var isGenap = (nilaiTengah % 2 === 0) ? true : false;
    
    var index = isGenap ? nilaiTengah : Math.ceil(nilaiTengah);

    return p.name[index  - 1].toLowerCase() === "i";
});

console.log("Filter Middle Name :");
console.log(filteredMiddleName)
console.log("========================================================");


//2. Jawaban No 2
var words = "aku suka makan nasi padang";

var words2 = words.slice(0,8);
var words3 = words.slice(0, 14);
var words4 = words.slice(0, 19);
var words5 = words.slice(" ");

console.log(words2);
console.log(words3);
console.log(words4);
console.log(words5);
console.log("========================================================");


//3. Jawaban No 3

//3.1 Map
var arr = [1,2,3,4,5];
var newArr = arr.map(function(a) {
   return a*10;
});

console.log("Hasil Map :");
console.log(arr); 
console.log(newArr);
console.log("========================================================");

//3.2 Filter
//Filter nama participant yang huruf keduanya huruf U
var filteredNames = participants.filter(function(p) {
    return p.name[1].toLowerCase() === "u";
});

console.log("Filter names :");
console.log(filteredNames);
console.log("========================================================");

//3.3 ForEach
participants.forEach(function(people, index) {
    console.log("Hasil ForEach : " + index + " - " + people.name)
});
console.log("========================================================");

//3.4 Find
var cariDia = participants.find(function(people) {
    return people.name == "Daus Firmansah";
});

console.log("Value yang didapat adalah : ");
console.log(cariDia);
console.log("========================================================");

//3.5 FindIndex
var index = participants.findIndex(function(people) {
    return people.score == "5";
});

console.log("Index yang didapat adalah : ", index);
console.log("========================================================");