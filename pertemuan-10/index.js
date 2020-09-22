//--- var, let, const ---

let nama = "Ryan";
let nama1 = "Vincent";

console.log(nama);

//--- scope dalam javascript ---
//1. function scope (var)
//2. block scope

//--- gunakan ini jika ingin lakukan sistem block scope ketika menggunakan "var"
function test(){ 
    for (var i=0;i<10;i++){
        console.log(i);
    }
}
//test();               [ output 1-10 ]
//console.log(i);       [ hasil error ]


//--- IIFE ---
(function testi(){ 
    for (var i=0;i<10;i++){
        console.log(i);
    }
})();

{
    let a;
    for(a=0;a<10;a++){
        console.log(a);
    }
}
//console.log(a);       [ error ]

//--- Template Literal ---

const person = {
    namaDepan: "Ryan",
    namaBelakang: "Jose",
    usia: 20,
};
const riwayat = {
    last: "SMA",
    now: "Peguruan Tinggi",
};

//--- cara penulisan lama ---
console.log("Halo, namaku " + person.namaDepan + " " + person.namaBelakang + ". Umurku " + person.usia + " tahun.")

//--- cara penulisan baru ---
console.log(`Halo, namaku ${person.namaDepan} ${person.namaBelakang}. Umurku ${person.usia}. Pendidikan terakhirku ${riwayat.last} dan sekarang menempuh pendidikan di ${riwayat.now}.`);