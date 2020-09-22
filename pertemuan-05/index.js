//---------- array's declaration ----------
//first declaration
let angka = [1,2,3,4,5,6,7,8];
console.log(angka);
let buah = ['Mangga', 'Anggur', 'Jeruk', 'Apel'];
console.log(buah);
let arr = ['text', 1, true];
console.log(arr);
let MyFunc = function(){
    return "Hello Array";
};
let arr2 = ['text', 1, true, MyFunc(), [1, 2, 3, 4, 5]];
console.log(arr2[2]);
console.log(arr2[4][3]);
console.log(arr2.length);
console.log(typeof arr2);

//second declaration
let buah2 = new Array ('Salak', 'Anggur');
console.log(buah2);


//---------- ARRAY MANIPULATION ---------- //


// A. menambah isi array
let mhs = [];
mhs[0] = 'Ryan';
mhs[1] = 'Putu';
mhs[2] = 'Vincent';
mhs[3] = 'Pedi';
console.log(mhs);

// B. mengubah isi array
mhs[1] = 'Aldi';
console.log(mhs);

// C. menghapus isi array
mhs[2] = undefined;
console.log(mhs);

// D. menampilkan isi array
let mahasiswa = ['Ryan', 'Putu', 'Vincent', 'Pedi', 'Aldi'];
for(let i=0;i<4;i++){
    console.log("Mahasiswa ke-" + (i+1) + " adalah " + mahasiswa[i]);
}


// ---------- ARRAY METHOD ---------- //


// 1. ----- LENGTH -----
 

// 2. ----- TOSTRING -----
let maha = ['Ryan', 'Putu', 'Vincent', 'Pedi', 'Aldi'];
console.log(maha.toString());


// 3. ----- JOIN -----
console.log(maha.join(" - "));


// 4. ----- PUSH, POP, SHIFT, UNSHIFT -----
//A. push : menambahkan value dari belakang
maha.push("Maria");
maha.push("Stenly");
console.log(maha.join(" - "));
//B. pop : menghilangkan value dari belakang
maha.pop();
maha.pop();
console.log(maha.join(" - "));
//C. unshift : menambahkan value dari depan
maha.unshift("Maria");
maha.unshift("Stenly");
console.log(maha.join(" - "));
//D. shift : menghilangkan value dari depan
maha.shift();
maha.shift();
console.log(maha.join(" - "));


// 5. ----- CONCAT -----
let fruit = ['Mangga', 'Apel', 'Anggur'];
let vege = ['Kangkung', 'Bayam', 'Buncis'];
let makanan = buah.concat(vege);
console.log(makanan);


// 6. ----- SPLICE & SLICE -----
//A. splice
let buahpakmu = ['Anggur', 'Apel', /*will inputed here*/ 'Jeruk', 'Mangga'];
buahpakmu.splice(2, 0, 'Melon', 'Semangka');
console.log(buahpakmu.join(" ~ "));
//B. slice
let buah3 = buahpakmu.slice(0, 3);
console.log(buah3.join(" - "));


// 7. ----- FOREACH & MAP -----
//A. forEach
let number = [1, 2, 3, 4, 5, 6, 7, 8];
// let show = function(element){
//     console.log(element);
// }
number.forEach(function(element){
    console.log(element);
})
//B. map
number.map(function(element){
    console.log(element);
})


// 8. ----- SORT -----


/*let angkaa = [1, 2, 3, 4, 5, 6, 7, 8];
let mahasis = ["Bob", "John", "Elia"];
mahasis.sort();
console.log(mahasis);
angkaa.sort(function(a, b){
    return a - b;
});
console.log(angkaa);*/


// 9. ----- FILTER -----
let angkaaa = [1, 100, 2, 20, 3, 4, 5, 6, 7, 8];
let angkaangka = angkaaa.filter(function(el){
    return el > 5;
});
console.log(angkaangka);