/* ------- DESTRUKTURISASI ARRAY ------- */

let Komputer = ["CPU", "GPU", "RAM"];
let [kom1, kom2, kom3] = Komputer;
console.log(kom1)
console.log(kom2)
console.log(kom3)


// ----- Using Koma Kosong
let [namaDepan, , namaBelakang, , hobi] = ["Ryan", "Jose", "Dickson", "Kegiatan", "Nonton"];
console.log(namaDepan)
console.log(namaBelakang)
console.log(hobi)


// ----- Tukar posisi nilai dalam variabel
// Cara lama ---
let a = 10;
let b = 15;

let temp = a;
a = b
b = temp

console.log(a)
console.log(b)

//Cara baru ---
let A = 10;
let B = 15;
[A, B] = [B, A]
console.log(A)
console.log(B)


/* ------- DESTRUKTURISASI OBJEK ------- */

let orang = {
    nama: "Bambang",
    umur: 25,
    Married: false
};
let{nama, umur, MarriedStatus} = orang;
console.log(nama)
console.log(umur)
console.log(MarriedStatus)


// Ubah nama variabel dalam properti
let people = {
    name: "Markonah",
    age: 23
};
let {name: namee, age: agee} = people;
console.log(namee)
console.log(agee)


// Destrukturisasi Objek Bertingkat
let komunitas = {
    namaKomunitas: "SPEEDING X WHEELIE",
    namaMember: ["Ano", "Ayen", "Boby"],
    prestasi: {
        kejurnas: "juara 3",
        championEvent: "harapan 2",
        leMans: "juara 2"
    }
};

let {
    prestasi: {kejurnas}
} = komunitas;

console.log(kejurnas)