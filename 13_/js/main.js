let inputData1 = document.getElementById("data1")
let inputData2 = document.getElementById("data2")
let inputData3 = document.getElementById("data3")
let inputData4 = document.getElementById("data4")

let btncal1 = document.getElementById("btn1")
let btncal2 = document.getElementById("btn2")


//
function transition(){
    let trans = Number(inputData1.value)*0.3025
    inputData2.value=trans
}
btncal1.addEventListener('click',function(){
    transition()
})

function transition2(){
    let trans2 = Number(inputData3.value)*3.3058
    inputData4.value=trans2
}
btncal2.addEventListener('click',function(){
    transition2()
})


//
inputData1.addEventListener('focus',function(){
    this.value=''
})
inputData2.addEventListener('focus',function(){
    this.value=''
})
inputData3.addEventListener('focus',function(){
    this.value=''
})
inputData4.addEventListener('focus',function(){
    this.value=''
})
