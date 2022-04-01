function selecionaComida(principal) {

    const escolhaComida = document.querySelector(".selecaoComida");

    if (escolhaComida !== null) {
        escolhaComida.classList.remove("selecaoComida");

    }

    principal.classList.add("selecaoComida");

}

function selecionaBebida(segundo) {

    const escolhaBebida = document.querySelector(".selecaoBebida");

    if (escolhaBebida !== null) {
        escolhaBebida.classList.remove("selecaoBebida");
    }

    segundo.classList.add("selecaoBebida");


}


function selecionaSobremesa(terceiro) {

    const escolhaSobremesa = document.querySelector(".selecaoSobremesa");

    if (escolhaSobremesa !== null) {
        escolhaSobremesa.classList.remove("selecaoSobremesa");
    }

    terceiro.classList.add("selecaoSobremesa");


}