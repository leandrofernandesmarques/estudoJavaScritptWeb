function tocaSom(seletorAudio){/* idtag audio do html */
    const elemento = document.querySelector(seletorAudio).play();
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0;contador < listaDeTeclas.length;contador ++){
    const tecla = listaDeTeclas[contador]
    const barulhoDeCadaTecla = tecla.classList[1];/* Neste caso o JS coloca dentro da variável os seguintes passos:
    listaDeTeclas[0].<cria uma lista pra mim das classe e dê um índice para a segunda casse e pegue o índice desta classe> ficando assim:
    1 - Acesse alista de teclas no indice [0]
    2 - Agora crie uma lista da segunda classe[1] neste caso o nome da classe é tecla_pom
    3 - Agora acesse a lista de teclas no índice 1 neste caso 'tecla'
    4 - Agora peque o índice 1 novamente, mas agora do listaDeTeclas[1] que neste caso o nome da classe é tecla_clap
    e assim sucessivamente...[2][1],[3][1],...*/
    
   const idAudio = `#som_${barulhoDeCadaTecla}`

    tecla.onclick = function(){
        tocaSom(idAudio)/* função anonima - Cria mas não chama (Ideal para casos em que o navegador impede a execução por qualquer motivo. No parametro passamos o que está sendo executado. Neste caso: Ao clicar, crie uma função e em seguida execute o parametro tocaSom('#som_telca_splash') */

        tecla.onkeydown = function (evento) {

            if (evento.code === 'Space' || evento.code === 'Enter') {
                tecla.classList.add('ativa');
            }
    
        }
    
        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }
   
    
    };
    
    
}
