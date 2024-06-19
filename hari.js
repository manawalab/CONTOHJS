const hari = prompt('input hari').toLowerCase;

if (hari == 'senin' || hari == 'selasa' || hari == 'rabu' || hari == 'kamis' || hari == 'jumat') {
    console.log ('Hari Kerja');
    
} else if (hari=='sabtu' || hari == 'minggu'){
    console.log ('Hari Libur');
} else {
    console.log ('anggu bukan nama hari itu ');
}