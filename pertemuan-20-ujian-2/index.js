// Web Programming - Exercise


// ===== BAGIAN A =====
console.log("BAGIAN A")
/* 1. */
console.log("Nomor 1")

const calculate = (birthYear) => {return 2019 - birthYear}
const pensiun = (usia) =>{
	let age = calculate(usia.birthYear)
	let retirement = 60 - age
	if(retirement > 0){
    	console.log(`${usia.firstName} retires in ${retirement} years.`)
    }
    else{
    	console.log(`${usia.firstName} is already retired.`)
	}
}
pensiun({
    birthYear: 1987,
    firstName: 'Bob'
});



/* 2. */  	
console.log("Nomor 2")

const add = (a, b, c, d, e, f, g) =>{
 	let angka = [a, b, c, d, e, f, g]
 	let sum = 0
    let i = angka.map(item=>{
      return sum+=item
    })
    console.log(i)
}

add(1,2,3,4,5,6,7)


/* 3. */
console.log("Nomor 3")

let phi = 3.14
let power = 2
let radius = 0
let calculateArea = (objek) =>{
    return phi * Math.pow(objek.radius, objek.power)
}
radius = 21
let area21 = calculateArea({radius: radius, power: 2})
radius = 7
let area7 = calculateArea({radius: radius, power: 2})
console.log(`Area with 21 radius ${area21}, and area with 7 radius: ${area7}`)
 


/* 4. */
console.log("Nomor 4")

const makeAjaxRequest = (url, method) => {
    if(!method){
           method = `GET`
    }
    console.log(`${url}, ${method}`);
}

makeAjaxRequest(`www.reddit.com`);




// ===== BAGIAN B =====
console.log("BAGIAN B")
/* 1. */
console.log("Nomor 1")

const warnaKesukaan = (warna = 'Putih') =>{
    return console.log(`Warna kesukaan saya adalah ${warna}`)
}    
warnaKesukaan('Tosca')




/* 2. */
console.log("Nomor 2")

let namaBuah1 = ['Apel', 'Mangga']
let namaBuah2 = ['Sirsak','Semangka']

let semuaNamaBuah = [...namaBuah1,...namaBuah2]

console.log (semuaNamaBuah)