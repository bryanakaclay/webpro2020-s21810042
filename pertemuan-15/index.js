/* ------- DESTRUCTURING ------- */
// memecah item dalam array dan disimpan ke dalam variabel yang berbeda
console.log("------- DESTRUCTURING -------")

// ---- ARRAY
console.log("---- ARRAY ----")

const warna = ['merah', 'kuning', 'hijau'];

//Old way
let one = warna[0];
let two = warna[1];
let three = warna[2];
console.log(one, two, three)

//New way
let [satu, dua, tiga] = warna;
console.log(satu, dua, tiga)

let [siji, loro] = warna;
console.log(siji, loro)

let [ichi, , san] = warna;
console.log(ichi, san)

// ---- OBJECT
console.log("---- OBJECT ----")

const user = {
    name: "Bob",
    age: 22,
    gender: "male"
}

//Old way
let nama = user.name;
let umur = user.age;
let jk = user.gender;
console.log(nama, umur, jk)

//New way
let {name, age, gender, born = "manado"} = user;
console.log(name, gender, age, born)


//---mengubah nama variabel
let {name: namaa, age: umurr} = user;
console.log(namaa, umurr);

const display = ({name, age}) =>{
    console.log(`Nama saya adalah ${name}. Umur saya ${age}`)
}
display(user)

// ---- ARRAY OBJECT
console.log("---- ARRAY OBJECT ----")

const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Jade"},
];

let [user1, user2, user3] = users
console.log(user1, user2, user3)

let [
    {id: iduser1, name: name1},
    {id: iduser2, name: name2},
    {id: iduser3, name: name3},
] = users;
console.log(iduser1, name1)


// ---- COMBINE W/ REST OPERATOR
console.log("---- COMBINE W/ REST OPERATOR ----")

const color = ["merah", "kuning", "hijau", "biru"];

let [sattu, ...lainnya] = color;
console.log(sattu)
console.log(lainnya)