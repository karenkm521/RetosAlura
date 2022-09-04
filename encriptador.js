const textoIngresado =document.querySelector(".IngresaTexto")
const resultadoTexto= document.querySelector(".SalidaTexto")

function botonEncriptar(){
    const mensajeEncriptado= encriptar(textoIngresado.value)
    if (mensajeEncriptado==textoIngresado.value){
        alert("No es posible encriptar el mensaje")
        textoIngresado.value="";

    }
    else{
      resultadoTexto.value=mensajeEncriptado;
      textoIngresado.value="";
}  
    }
    
function encriptar(stringEncriptado){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado= stringEncriptado.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll (matrizCodigo [i][0], matrizCodigo [i][1])
        }
    
    }
    return stringEncriptado;

}

function botonDesencriptar(){
    const mensajeEncriptado= desencriptar(textoIngresado.value)
    if (mensajeEncriptado==textoIngresado.value){
        alert("El mensaje ingresado no esta encriptado")
        textoIngresado.value="";

    }
    else{
      resultadoTexto.value=mensajeEncriptado;
      textoIngresado.value="";
}
}

function desencriptar(stringEncriptado){
    let matrizCodigo=[["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]];
    stringEncriptado= stringEncriptado.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll (matrizCodigo [i][0], matrizCodigo [i][1])
        }
    }
    return stringEncriptado;

}
function copy() {
    resultadoTexto.select();
    document.execCommand('copy');
    alert("Mensaje copiado");
    
}



let writing=str=>{
    let arrFromStr= str.split('');
    let i=0;
    let printStr =setInterval(function(){
        document.body.innerHTML += arrFromStr[i];
        i++;
        if (i === arrFromStr.length){
            clearInterval(printStr);
        }
    } ,200);
}

