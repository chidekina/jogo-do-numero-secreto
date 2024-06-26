//let titulo = document.querySelector('h1');
//titulo.innerHTML = ;

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 100';
let listaDeNumerosSorteados = [];
let numeroDeTentativasMaxima = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}
function exibirMensagemInicial (){
    exibirTexto('h1','Jogo do numero secreto');
    exibirTexto('p','Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){

    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTexto('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas =  `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}`
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else {
        if (chute > numeroSecreto){
            exibirTexto('p','O numero secreto eh menor');
        }
        else{
            exibirTexto('p','O numero secreto eh maior');
        }
        tentativas++;
        limparCampo();
        }
    }

    function gerarNumeroAleatorio(){
        let numeroEscolhido = parseInt(Math.random()*numeroDeTentativasMaxima + 1);
        let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeElementosNaLista == numeroDeTentativasMaxima) {
            listaDeNumerosSorteados = [];
        }
        if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
        }
        else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido;
        }
        }
    
    function limparCampo (){
        chute = document.querySelector('input');
        chute.value = ''
    }

    function reiniciarOJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }
