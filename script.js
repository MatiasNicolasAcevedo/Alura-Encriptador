
const mensajeEntrada = document.querySelector(".mensaje-entrada");  /* almacenar en variable, lo que el usuario escribe en textarea */
const mensajeSalida = document.querySelector(".mensaje"); 
const mensajeNoEncontrado = document.querySelector(".mensaje-no-encontrado");
const mensajeEncontrado = document.querySelector(".mensaje-encontrado");

function btnEncriptar() {
    const textoEncriptado = encriptar(mensajeEntrada.value); /* se guarda en una variable lo que devuelve encriptar(mensajeEntrada) */
    mensajeSalida.value = textoEncriptado; /* guardamos en mensaje de salida, el textoEncriptado */
    mensajeEntrada.value = ""; /* despejamos el textarea */
    mensajeEncontrado.style.display = "flex"; /* se muestra el mensaje encontrado */
    mensajeNoEncontrado.style.display = "none"; /* se oculta el mensaje de no encontrado */
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; /* se setea una matriz, con las llaves de encriptacion */
    stringEncriptada = stringEncriptada.toLowerCase();  /* a minusculas */

    for (let i = 0; i < matrizCodigo.length; i++) { 
        if(stringEncriptada.includes(matrizCodigo[i][0])){ /* recorremos el string, buscando si includes la posicion [i][0] de la matriz, las vocales */
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); /* si es true, reemplaza la vocal, con la posicion [i][1] de la matriz */
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensajeEntrada.value);
    mensajeSalida.value = textoDesencriptado;
    mensajeEntrada.value = ""; /* despejamos el textarea */
    mensajeEncontrado.style.display = "flex"; /* se muestra el mensaje encontrado */
    mensajeNoEncontrado.style.display = "none"; /* se oculta el mensaje de no encontrado */
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; /* se setea una matriz, con las llaves de encriptacion */
    stringDesencriptada = stringDesencriptada.toLowerCase();  /* a minusculas */

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){ /* recorremos el string, buscando si includes la posicion [i][1] de la matriz, las encriptaciones */
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]); /* si es true, reemplaza la encriptacion, con la posicion [i][0] de la matriz, las vocales */
        }
    }
    return stringDesencriptada;
}

function btnCopiar() {
    let copyText = document.querySelector(".mensaje");
    copyText.select();
    document.execCommand("copy");
}
