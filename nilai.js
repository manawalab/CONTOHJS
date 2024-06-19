const nilaimurid = {
    Olivia : 20,
    Liam : 10,
    Emma : 15,
    Noah : 25,
    Amelia : 20,
    Oliver : 10,
    Ava : 11,
    Elijah : 21,
    Sophia : 14,
    Mateo : 22,
}

//menampilkan nilai atau properti pada sebuah objek (for in)
// for (let murid in nilaimurid) {
//     console.log(`${murid} memiliki nilai ${nilaimurid[murid]}`);
// }


// console.log (Object.values(nilaimurid))


//menampilkan properti nilai dan objek (for of)
let total = 0;
let scores = Object.values(nilaimurid);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length);