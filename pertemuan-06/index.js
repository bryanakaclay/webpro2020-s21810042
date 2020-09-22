//objek : kumpulan data yang mempunyai nama

// ---------- OBJEK ----------

const mahasiswa = ['John', 'Doe', 31, true];

//----- DEKLARASI OBJECT -----
//1. Object Literals
const mhs1 = {
    namaDepan : 'John',
    namaBelakang : 'Doe',
    umur : 31,
    sudahLulus : true,
    //nested object
    alamat : {
        jalan : 'Jln. Arnold Mononutu',
        kecamatan : 'Airmadidi',
        kabupaten : 'Minahasa Utara',
    },
    IPSemester : [3.05, 3.25, 3.0, 3.4],
    hitungIPK : function() {
        let total = 0;
        this.IPSemester.forEach(function(el){
            total = total + el;
        });
        return total / 4;
    }
};

//2. kata kunci New
const mhs2 = new Object();
mhs2.namaDepan = 'Jane';
mhs2.namaBelakang = 'Smith';

//----- mengakses properti objek -----
// 1. dot notation
console.log(mhs1.umur);
// 2. bracket notation
console.log(mhs1["namaBelakang"]);

//----- display nested object -----
console.log(mhs1.alamat.jalan);
console.log(mhs1.IPSemester);
console.log(mhs1);
console.log(mhs2.namaDepan);

//----- hapus properti objek -----
delete(mhs1.namaBelakang);
console.log(mhs1);

// ----- integrated object -----
const mhs3 = [
    {
        nim: 001,
        namaDepan: 'John',
        namaBelakang: 'Doe',
    },
    {
        nim: 002,
        namaDepan: 'Jane',
        namaBelakang: 'Smith',
    },
    {
        nim: 003,
        namaDepan: 'Stenly',
        namaBelakang: 'William',
    },
];
mhs3.forEach(function(el){
    console.log(el);
});