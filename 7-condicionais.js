console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 21;

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
}else{
    console.log("Não é maior de idade, não posso vender");

} // if-condicional (SE): algo que sera execudado caso a condição for cumprida, nesse caso se a idade do comprador for maior ou igual a 18. else-caso contrario (senão): caso a condição de if nao for cumprida será imprimida a seguinte mensagem.

console.log(listaDeDestinos);
