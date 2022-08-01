console.log(`Trabalhando com Listas`);
//Array e uma forma de declarar varias variaves de uma so vez, em uma forma de lista.
const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);//.push: "empurra" adiciona mais um item a Array

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);//.splice: deleta um item da Array, sendo necessario indicar em qual item vai comçar a deletar "start"(a contagens de itens sempre começa do 0), e a quantidae de itens

console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); //o couchetes "[]": especifica um item em uma posição especifica, imprimindo assim somente aquele item

