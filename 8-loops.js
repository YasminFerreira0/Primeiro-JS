console.log(`\nTrabalhando com Loops\n`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;

console.log("Destinos Possiveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Compra evetuada com sucesso!!");
    listaDeDestinos.splice(1, 1);
    temPassagemComprada = true;
}else{
    console.log("Não é maior de idade, não posso vender");
}
console.log(listaDeDestinos);

console.log("Embarque: ")
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa Viagem!!\n");
}else{
    console.log("Você não pode embarcar\n");
}
