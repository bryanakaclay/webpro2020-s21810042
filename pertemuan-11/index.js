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

/* ==||==   EXERCISE   ==||== */
//Convert ke ES6

const yearUntilRetirement = (year = 2020, firstName = "Ryan") => {
    let age = 28;
    let retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} retired in ${retirement} years.`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
}
yearUntilRetirement();