let input = prompt ('Tuliskan apa saja !');

while (true) {
    input = prompt (input);
    if (input === 'stop') break;
}

console.log('proses dihentikan');
