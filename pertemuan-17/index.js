/* ======= SYNCHRONOUS & ASYNCHRONOUS ======= */

const second = () =>{
    const num = 10
    setTimeout(() =>{
        console.log("Second")
        console.log(num)
    }, 2000, num)
}

const first = () =>{
    console.log("First")
    second()
    console.log("The End")
}
first()


const bug = () =>{
    setTimeout(() =>{
        console.log("---BUG---")
        console.log("Pertama")
        setTimeout(() =>{
            console.log("Kedua")
            setTimeout(()=>{
                console.log("Ketiga")
            }, 3000)
        }, 3000)
    }, 3000)
}
bug()



const getData = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const error = false //switch to true for output "ERROR", and false for "SUCCESS"
            if(error){
                reject('Error ya sis')
            }else{
                resolve(10)
            }
        }, 10000)
    })
}
const getName = id =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`ID: ${id} Success`)
        }, 2000)
    })
}
getData()
    // .then(success=>console.log(success))
    .then(id => getName(id))
    .then(success => console.log(success))
    .catch(error=>console.log(error))  



const getNameByID = async ()=>{
    let ID, sukses
    try{
        ID = await getData()
        sukses = await getName(ID)
        // console.log(sukses)
    }catch(error){
        console.log('Error gan!!')
    }
    return sukses
}
getNameByID().then(result=>console.log(result))