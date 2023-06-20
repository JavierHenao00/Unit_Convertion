// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const content1El = document.getElementById("content1")
const content2El = document.getElementById("content2")
const content3El = document.getElementById("content3")
const btnEl = document.getElementById("btn_conv")
const inputEl = document.getElementById("inputUnit")

let str1 = ""
let str2 = ""
let str3 = ""

function meterTofeet(meter){

     
    let M2F = meter*3.28084 
    let F2M = meter/3.28084
    str1 = `${inputEl.value} Meters = ${M2F.toFixed(3)} Feets | ${inputEl.value} Feets = ${F2M.toFixed(3)} Meters  `

    
    return str1
}

function literToGallons(Gallon){

     
    let L2G = Gallon*0.264172
    let G2L = Gallon/0.264172
    str2 = `${inputEl.value} Liters = ${L2G.toFixed(3)} Gallons | ${inputEl.value} Gallons = ${G2L.toFixed(3)} Liters  `

    
    return str2
}


function KgToPounds(Kg){

     
    let K2P = Kg*2.20462
    let P2K = Kg/2.20462
    str3 = `${inputEl.value} Kilograms = ${K2P.toFixed(3)} Pounds | ${inputEl.value} Pounds = ${P2K.toFixed(3)} Kilograms  `

    
    return str3
}



btnEl.addEventListener("click", function(){

    meterTofeet(inputEl.value)
    literToGallons(inputEl.value)
    KgToPounds(inputEl.value)
    
    
    content1El.innerHTML = str1
    content2El.innerHTML = str2
    content3El.innerHTML = str3
   
    
})
