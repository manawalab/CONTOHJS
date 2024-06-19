const urutanmurid = [
    ['Olivia','Liam','Emma','Noah'],
    ['Amelia','Oliver','Ava','Elijah'],
    ['Sophia','Mateo','Isabella','Lucas']
];

// for (let i = 0; i < urutanmurid.length; i++) {
//     const row = urutanmurid[i];
//     console.log(`Seat Row #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         // console.log(row[j]);
//         const murid = row[j];
//         console.log(`   ${j + 1}. ${murid}`);
//     }
// }



// const pilihan = 'abcd';
// for (let i=1; i<=10; i++) {
//     console.log(`${i}, Soal Nomor ${i}:`);
//     for (let j = 0; j < pilihan.length; j++) {
//         console.log(`   ${pilihan[j]}.  Pilihan Jawaban`);

//     }

// }

for (let baris of urutanmurid) {
    for (let murid of baris ) {
        console.log(murid);
    }
}