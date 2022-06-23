console.log(`\nTrabalhando com Loops\n`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

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

while(contador < 3) {
    if(listaDeDestinos[contador] == destino){
        console.log("Destino Existe");
    }else{
        console.log("Destino não Existe");
    }
    contador += 1;
}

