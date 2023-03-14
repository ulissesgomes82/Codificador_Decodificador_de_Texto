const texteArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"




function encriptar() {
    var txtDigitado = document.querySelector(".text-area").value.toLowerCase();
    if (txtDigitado != "") {
        var txtCripto = txtDigitado.split(/e/g).join("enter").split(/i/g).join("imes").split(/a/g).join("ai").split(/o/g).join("ober").split(/u/g).join("ufat");
        document.querySelector(".mensagem").innerHTML = txtCripto;
        document.querySelector(".text-area").value = "";
    } else {
        alert("Digite ou Cole Algo Para Criptografar");
    }
}

function desencriptar() {
    var txtColado = document.querySelector(".text-area").value.toLowerCase();
    if (txtColado != "") {
        var txtCripto = txtColado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.querySelector(".mensagem").innerHTML = txtCripto;
        document.querySelector(".text-area").value = "";
    } else {
        alert("Digite ou Cole Algo Para Descriptografar");
    }
}

async function copiar() {
    let texto = document.querySelector(".mensagem").value;
    await navigator.clipboard.writeText(texto);
    document.querySelector(".mensagem").value = "";
    document.querySelector(".text-area").value = texto
}

function copy(){
    const copyText = document.querySelector(".mensagem");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
} 
// function btnEncriptar() {
//     mensagem.value = encriptar2(texteArea.value.toLowerCase());
//     texteArea.value = "";
// }

// function encriptar2(texto) {
//     let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//     texto = texto.toLowerCase();
//     for (let i = 0; i < matrizCodigo.length; i++) {
//         if (texto.includes(matrizCodigo[i][0])) {
//             texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
//         }
//     }
//     return texto;
// }

// function btnDesencriptar() {
//     mensagem.value = desencriptar2(texteArea.value.toLowerCase());
//     texteArea.value = "";
// }

// function desencriptar2(texto) {
//     let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//     texto = texto.toLowerCase();
//     for (let i = 0; i < matrizCodigo.length; i++) {
//         if (texto.includes(matrizCodigo[i][1])) {
//             texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
//         }
//     }
//     return texto;
// }