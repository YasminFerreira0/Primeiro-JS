console.log(`Trabalhando com Condicionais\n`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos Possiveis:");
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// }else{
//     if(estaAcompanhada){
//         console.log("Comprador maior de idade");
//         listaDeDestinos.splice(1, 1);
//     }else{
//         console.log("Não é maior de idade, não posso vender");
//     }
// } 

// if-condicional (SE): algo que sera execudado caso a condição for cumprida, nesse caso se a idade do comprador for maior ou igual a 18. else-caso contrario (senão): caso a condição de if nao for cumprida será imprimida a seguinte mensagem.

if(idadeComprador >= 18 || estaAcompanhada){//operador ||:"ou"
    console.log("Compra evetuada com sucesso!!");//\n: quebra de linha
    listaDeDestinos.splice(1, 1);
}else{
    console.log("Não é maior de idade, não posso vender");
}
console.log(listaDeDestinos);

console.log("Embarque: ")
if(idadeComprador >=18 && temPassagemComprada){//operador &&:"e"
    console.log("Boa Viagem!!\n");
}else{
    console.log("Você não pode embarcar\n");
}


