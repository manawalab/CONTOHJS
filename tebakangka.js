let maximum = parseInt(prompt('Masukkan nilai maksimal!'));
while (!maximum) {
    maximum = parseInt(prompt('Masukkan nilai maksimal!'));
} 
const targetNum = Math.floor(Math.random() * maximum) +1;
console.log(targetNum);

let guess = parseInt(prompt('Isi tebakan pertama kamu!'));

while (guess !==targetNum) {
    if (guess > targetNum) {
        guess = parseInt(prompt('Tebakan kamu terlalu besar!'));
    } else {
        guess = parseInt(prompt('Tebakan kamu terlalu kecil!'));
    }
}

alert('Selamat! Tebakan kamu benar!');