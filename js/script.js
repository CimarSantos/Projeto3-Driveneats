let pratoEscolhido, pratoPreco;

function selecionaComida(principal) {

    const escolhaComida = document.querySelector(".selecaoComida");

    if (escolhaComida !== null) {
        escolhaComida.classList.remove("selecaoComida");

    }

    principal.classList.add("selecaoComida");
    pratoEscolhido = principal.querySelector(".nomePrato").textContent;
    pratoPreco = parseFloat(principal.querySelector(".precoPrato").textContent);
    habilitaBotao();
}

let bebidaEscolhida, bebidaPreco;

function selecionaBebida(segundo) {

    const escolhaBebida = document.querySelector(".selecaoBebida");

    if (escolhaBebida !== null) {
        escolhaBebida.classList.remove("selecaoBebida");
    }

    segundo.classList.add("selecaoBebida");
    bebidaEscolhida = segundo.querySelector(".nomeBebida").textContent;
    bebidaPreco = parseFloat(segundo.querySelector(".precoBebida").textContent);
    habilitaBotao();
}

let sobremesaEscolhida, sobremesaPreco;

function selecionaSobremesa(terceiro) {

    let escolhaSobremesa = document.querySelector(".selecaoSobremesa");


    if (escolhaSobremesa !== null) {
        escolhaSobremesa.classList.remove("selecaoSobremesa");

    }

    terceiro.classList.add("selecaoSobremesa");
    sobremesaEscolhida = terceiro.querySelector(".nomeSobremesa").textContent;
    sobremesaPreco = parseFloat(terceiro.querySelector(".precoSobremesa").textContent);
    habilitaBotao();
}


function habilitaBotao() {
    if ((sobremesaEscolhida !== undefined) && (bebidaEscolhida !== undefined) && (pratoEscolhido !== undefined)) {

        document.querySelector(".botaoDesabilitado").style.display = "none";
        document.querySelector(".fechaPedido").style.display = "initial";
    }
}

let fimPedido, nomeCliente, endereco, URI;

function finalizandoPedido() {

    nomeCliente = prompt("Como devemos te chamar quando o entregador chegar?");
    endereco = prompt("Qual seu endereço?");

    fimPedido = `Olá, gostaria de fazer o pedido:
- Prato: ${pratoEscolhido}
- Bebida: ${bebidaEscolhida}
- Sobremesa: ${sobremesaEscolhida}
Total: R$ ${(pratoPreco + bebidaPreco + sobremesaPreco).toFixed(2)}

Nome: ${nomeCliente}
Endereço: ${endereco}`;

    URI = encodeURIComponent(fimPedido);

    window.open("https://wa.me/5512988548474?text=" + URI);
}