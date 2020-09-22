// ----- KONDISI -----

// ----- IF, ELSE IF, ELSE -----
let nilai = 90;

if(nilai > 80) {
    console.log("SANGAT MEMUASKAN");
}
else if(nilai >=60 && nilai <=80){
    console.log("MEMUASKAN");
}
else {
    console.log("NICE WORK. KEEP IT UP");
}

// ----- (((( SWITCH DAN CASE ))) -----
// ----- CASE 1 -----
let clothes;
let kegiatan = "kuliah";

switch (kegiatan){
    case "kuliah":
        clothes = "Baju berkerah dan celana panjang";
        break;
    case "olahraga":
        clothes = "Kaos olahraga dan celana pendek";
        break;
    case "Hangout":
        clothes = "Pakaian santai dan sendal";
        break;
    case "Belanja":
        clothes = "Baju kaos dan celana pendek";
        break;
    case "PhotoShot":
        clothes = "Pakaian santai dan pantas";
        break;
    default:
        clothes = "Baju rumah dan celana pendek";
}
console.log(clothes);

// ----- CASE 2 -----
let makanan;
let hari = "selasa";

switch (hari){
    case "senin":
    case "selasa":
    case "rabu":
    case "kamis":
        makanan = "Glutton";
        break;
    case "jumat":
        makanan = "Sayur Labu";
        break;
    default:
        makanan = "Steak dan Iga Sapi";
}
console.log(makanan);

// ----- ((( LOOP ))) -----
// ----- FOR LOOP -----

for(i=1;i<=10;i++){
    console.log(i);
}

// ----- FOR...IN LOOP -----

const buku = {
    judul : "Nanti Kita Cerita Tentang Hari Ini",
    pengarang : "Marchella FP",
    tahun : 2020
};
for(x in buku){
    console.log(x, ':', buku[x]);
}

// ----- FOR...OF LOOP -----

const book = [
    "Game of Thrones",
    "Harry Potter",
    "Lord of the Rings"
];
for(a of book){
    console.log(a);
}

// ----- WHILE LOOP -----

let z = 1;
while (z <= 10){
    console.log(z);
    z++;
}

// ----- DO...WHILE LOOP -----

let b = 1;
do{
    console.log(b);
    b++;
}
while(b<=10);

