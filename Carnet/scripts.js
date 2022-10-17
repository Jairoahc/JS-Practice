//Generar un carnet
function carnet(){
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let cargo = document.getElementById("cargo").value
    let numeroDocumento = document.getElementById("numeroDocumento").value
    let telefono = document.getElementById("telefono").value
    let RH = document.getElementById("RH").value


    document.getElementById("titleOtro").innerHTML = "¡Encuentra tu Carnet mas abajo!"
    document.getElementById("img1").innerHTML = `<img src="../img/BIT2.png" alt="" class="w-100 rounded">` 

    document.getElementById("nombrec").innerHTML = `Nombres: ${nombre}`
    document.getElementById("apellidoc").innerHTML = `Apellidos: ${apellido}`
    document.getElementById("edadc").innerHTML = `Edad: ${edad}`
    document.getElementById("cargoc").innerHTML = ` Cargo: ${cargo}`
    document.getElementById("idc").innerHTML = `ID: ${numeroDocumento}`
    document.getElementById("telefonoc").innerHTML = ` Telefono: ${telefono}`
    document.getElementById("RHC").innerHTML = `RH: ${RH}`

    return


}