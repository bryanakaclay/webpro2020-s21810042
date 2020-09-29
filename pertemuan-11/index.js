//----- Arrow function -----

//--- tanpa parameter ---
const namabuah = () => {
    const buah = ["Anggur", "Apel", "Jeruk", "Durian", "Nanas", "Semangka", "Kokoa"];
    return buah[Math.floor(Math.random()*(buah.length))];
}
console.log(namabuah());

//--- dengan parameter ---
const hitungan = (bil1, bil2) =>{
    const result = bil1 + bil2;
    return result;
}
console.log(hitungan(5, 5));