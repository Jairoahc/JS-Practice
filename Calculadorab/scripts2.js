// Calculadora basica Se debe construir una calculadora que sea capaz de hacer las 4 operaciones básicas usando como entrada 2 numeros

function calculadora (){
    let operacion = document.getElementById("oper").value;
    let valor1 = document.getElementById("primervalor").value
    let valor2 = document.getElementById("segundovalor").value
    
    if(operacion === "----"){
        return alert("Debe seleccionar el tipo de operacion a realizar")

    } else if (valor1 === ""){
        return alert("Debe ingresar el primer valor para operar")
    } else if (valor2 === ""){
        return alert("Debe ingresar el segundo valor para operar")

    } else if(operacion === "+" ){
        let resultadoSuma = Number(valor1) + Number(valor2)
        document.getElementById("resultadoGeneral").innerHTML = `Tu resultado es = ${resultadoSuma}`
        console.log(resultadoSuma)
        return;

    } else if (operacion === "-"){
        let resultadoResta = Number(valor1) - Number(valor2)
        document.getElementById("resultadoGeneral").innerHTML = `Tu resultado es = ${resultadoResta}`
        console.log(resultadoResta)
        return;

    } else if (operacion === "*") {
        let resultadoMult = Number(valor1) * Number(valor2)
        document.getElementById("resultadoGeneral").innerHTML = `Tu resultado es = ${resultadoMult}`
        console.log(resultadoMult)
        return;

    } else if (operacion === "/") {
        let resultadoDiv = Number(valor1) / Number(valor2)
        document.getElementById("resultadoGeneral").innerHTML = `Tu resultado es = ${resultadoDiv}`
        console.log(resultadoDiv)
        return;

    }
}
