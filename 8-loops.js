console.log(`\nTrabalhando com Loops\n`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("Destinos Possiveis:\n");
console.log(listaDeDestinos);

//if(idadeComprador >= 18 || estaAcompanhada == true){
    //console.log("Compra evetuada com sucesso!!");
    //listaDeDestinos.splice(1, 1);
    //temPassagemComprada = true;
//}else{
   // console.log("Não é maior de idade, não posso vender");
    //temPassagemComprada = false;
//}

//console.log(listaDeDestinos);

//console.log("Embarque: ")
//if(idadeComprador >=18 && temPassagemComprada){
  //  console.log("Boa Viagem!!\n");
//}else{
  //  console.log("Você não pode embarcar\n");
//}

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;

//while(contador < 3) {
    //console.log(listaDeDestinos[contador]);  o while cria um loop infinito, o computador faz a verificação se o contador e menor que 3, e executa o codigo imprimindo o console.log. Depois ele volta e executa novamente o loop.

    //contador += 1; imprime o valor do contador e achenta mais um a cada verificão.
//}
let destinoExiste = false;

while(contador < 3) {
    if(listaDeDestinos[contador] == destino){
        //console.log("Destino Existe");
        destinoExiste = true;
        break;//se a condição for comprida ele para de rodar o loop e passa para a priximo codigo. Ao colocarmos um break dentro do laço estamos falando para o interpretador que quando ele chegar nessa linha ele deve sair do laço independentemente de outras condições.
    } 
        //else{
        // console.log("Destino não Existe");
            //destinoExiste = false;
        //}
    contador += 1;
}

//Breakpoint = ponto de parada, quando o codigo estiver sendo executado ele irá parar de executadar no local marcado
//o Debug e feito no vscode 

console.log("\nDestino Existe: ", destinoExiste);
