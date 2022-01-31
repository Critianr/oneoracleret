
function textencriptar() {
    texto = document.querySelector('#text-encript');
      return texto.value;

}
function output(encryptedString){
    document.querySelector("#output").value=encryptedString;
    console.log(encryptedString)
}
function salida(salidaencriptado){
    const block = document.querySelector('#salid');
    let HTMLString = `	<h1>${salidaencriptado}</h1>`
    block.innerHTML = HTMLString
    console.log(salidaencriptado)
}

function validarTexto(texto){
    lista = texto.split('');
    var error = false;
    for(var i = 0; i < lista.length; i++){
        if (lista[i].codePointAt(0) != 32 && (lista[i].codePointAt(0) < 97 || lista[i].codePointAt(0) > 122) && (lista[i].codePointAt(0) < 65 || lista[i].codePointAt(0) > 90)){
            error = true;
            break;
        }
    }
    return error;
}

function encriptar(textencriptar) {
    lista = textencriptar.toLowerCase().split('');
    for (var i = 0; i < lista.length; i++) {
        if (lista[i] == "a") {
            lista.splice(i, 1, ("ai"));
        } else if (lista[i] == "e") {
            lista.splice(i, 1, ("enter"));
        } else if (lista[i] == "i") {
            lista.splice(i, 1, ("imes"));
        } else if (lista[i] == "o") {
            lista.splice(i, 1, ("ober"));
        } else if (lista[i] == "u") {
            lista.splice(i, 1, ("ufat"));
        }
    }
    return lista.join("");
}
function desencriptar(textencriptar){
    lista = textencriptar.toLowerCase().split('');
    for(var i = 0; i < lista.length; i++){
        if((lista[i]+lista[i+1]) == "ai"){
            lista.splice(i, 2, "a");
        } else if ((lista[i]+lista[i+1]+lista[i+2]+lista[i+3]+lista[i+4]) == "enter"){
            lista.splice(i, 5, "e");
        } else if ((lista[i]+lista[i+1]+lista[i+2]+lista[i+3]) == "imes"){
            lista.splice(i, 4, "i");
        } else if ((lista[i]+lista[i+1]+lista[i+2]+lista[i+3]) == "ober"){
            lista.splice(i, 4, "o");
        } else if ((lista[i]+lista[i+1]+lista[i+2]+lista[i+3]) == "ufat"){
            lista.splice(i, 4, "u");
        }
    }   
    return lista.join("");
}

var encriptarBoton = document.querySelector("#boton-encript");
var desencriptarBoton = document.querySelector("#boton-desencriptar");
// var buttonCopy = document.querySelector("#btn-copy");

encriptarBoton.addEventListener("click", function (event) {
    var texto = textencriptar();
     encriptar(texto);
     console.log(texto)
     console.log(encriptar(texto))
    
    //  motrar palabra
    var mostrarEncriptado = encriptar(texto);
    salida(mostrarEncriptado)
    output(mostrarEncriptado);

});
desencriptarBoton.addEventListener("click", function (event) {
    var texto = textencriptar();
    
    var mostrarDesencriptar = desencriptar(texto);

    salida(mostrarDesencriptar)
    output(mostrarDesencriptar);

});