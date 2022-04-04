let pratoEscolhido;

function selecionaComida(principal) {

    const escolhaComida = document.querySelector(".selecaoComida");

    if (escolhaComida !== null) {
        escolhaComida.classList.remove("selecaoComida");

    }

    principal.classList.add("selecaoComida");
    pratoEscolhido = principal.querySelector(".nomePrato").textContent;
    habilitaBotao();
}

let bebidaEscolhida;

function selecionaBebida(segundo) {

    const escolhaBebida = document.querySelector(".selecaoBebida");

    if (escolhaBebida !== null) {
        escolhaBebida.classList.remove("selecaoBebida");
    }

    segundo.classList.add("selecaoBebida");
    bebidaEscolhida = segundo.querySelector(".nomeBebida").textContent;
    habilitaBotao();
}

let sobremesaEscolhida;

function selecionaSobremesa(terceiro) {

    let escolhaSobremesa = document.querySelector(".selecaoSobremesa");


    if (escolhaSobremesa !== null) {
        escolhaSobremesa.classList.remove("selecaoSobremesa");

    }

    terceiro.classList.add("selecaoSobremesa");
    sobremesaEscolhida = terceiro.querySelector(".nomeSobremesa").textContent;
    habilitaBotao();
}


function habilitaBotao() {
    if ((sobremesaEscolhida !== undefined) && (bebidaEscolhida !== undefined) && (pratoEscolhido !== undefined)) {

        document.querySelector(".botaoDesabilitado").style.display = "none";
        document.querySelector(".fechaPedido").style.display = "initial";
    }
}

function finalizandoPedido() {
    alert("Boa");
}